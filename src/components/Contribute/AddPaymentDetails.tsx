import { useState, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import stripe from "../../assets/stripe.svg";
import { UseDataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";
import PaymentModal from "./PaymentModal";

interface FormErrors {
  [key: string]: string;
}

interface FormType {
  id: number; // A unique identifier (e.g., timestamp)
  FirstName: string; // Name of the user
  LastName: string; // Email address
  Email: string; // Email address
  Phone: string; // Phone number
  address: string; // Address line
  city: string; // City name
  zipCode: string; // Zip/postal code
  state: string; // State name
  country: string; // Country name
  paymentMethod: string; // Payment method (e.g., 'online', 'offline')
  rememberMe: boolean; // Whether the user opts for "remember me"
  amount: number | null; // Total amount
}

interface SelectedProject {
  id?: string;
  projectName: string;
  unitAmount: number;
  quantity: number;
  remark: string;
}

interface Props {
  totalDonationAmount: number;
  baseDonationId: string;
  selectedProjects: SelectedProject[];
  initialFormData: FormType;
}

export default function PaymentForm({
  totalDonationAmount,
  baseDonationId,
  selectedProjects,
  initialFormData,
}: Props) {
  const BASE_URL = import.meta.env.VITE_RETURN_BACKEND_API;

  const { data } = UseDataContext();
  const defaultForm: FormType = {
    id: Date.now(),
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    address: "",
    city: "",
    zipCode: "",
    state: "",
    country: "",
    paymentMethod: "zelle",
    rememberMe: false,
    amount: 0,
  };
  const [formData, setFormData] = useState<FormType>(defaultForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [IsFormValidate, setIsFormValidate] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const navigation = useNavigate();
  const { setData } = UseDataContext();
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.FirstName) {
      newErrors.FirstName = "First Name is required";
    }
    if (!formData.Email) {
      newErrors.Email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = "Invalid email format";
    }

    if (!formData.Phone) {
      newErrors.Phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.Phone)) {
      newErrors.Phone = "Invalid phone number";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    if (!formData.city) {
      newErrors.city = "City is required";
    }

    if (!formData.zipCode) {
      newErrors.zipCode = "ZIP code is required";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Synchronize formData with initialFormData
  useEffect(() => {
    setFormData({
      ...formData,
      FirstName: initialFormData?.FirstName ? initialFormData?.FirstName : "",
      LastName: initialFormData?.LastName ? initialFormData?.LastName : "",
      Email: initialFormData?.Email,
      Phone: initialFormData?.Phone,
      address: initialFormData?.address,
      city: initialFormData?.city,
      zipCode: initialFormData?.zipCode,
      country: initialFormData?.country,
      state: initialFormData?.state,
    });
  }, [initialFormData]);

  useEffect(() => {
    setFormData((v: FormType) => ({ ...v, amount: totalDonationAmount }));
  }, [totalDonationAmount]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (
        formData.paymentMethod === "cheque" ||
        formData.paymentMethod === "zelle"
      ) {
        setIsFormValidate(true);
        const payload = {
          donAmt: totalDonationAmount, // Total donation amount
          donorName: `${formData?.FirstName} ${formData?.LastName}`, // Full name of the donor
          displayName: `${baseDonationId}-${formData?.FirstName}-${
            formData?.LastName
          }-${formData.paymentMethod === "cheque" ? "Check" : "Zelle"}`, // Display name for the donation record
          donorEmail: formData?.Email, // Donor's email
          donorMobile: formData?.Phone, // Donor's mobile number
          donorBillSt: formData?.address, // Donor's billing street
          donorCity: formData?.city, // Donor's billing city
          donorState: formData?.state, // Donor's billing state
          donorZip: formData?.zipCode, // Donor's billing zip/postal code
          donorCountry: formData?.country, // Donor's billing country
          tnxId: formData?.paymentMethod, // Transaction ID or payment mode
          donationCategories: selectedProjects, // Array of donation category objects
        };

        fetch(`${BASE_URL}/api/donate/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((resp) => resp?.json())
          .then((response) => {
            if (response?.success) {
              // toast.success(response?.message);
              setModalContent(formData.paymentMethod);
              setShowModal(true);
            } else {
              toast.error(response?.message);
            }
          })
          .catch((error) => {
            setIsFormValidate(false);
            toast.error("Something went wrong. Please try again later.");
            console.error(error);
          })
          .finally(() => {
            setIsFormValidate(false);
          });
      } else if (formData.paymentMethod === "online") {
        setIsFormValidate(true);
        fetch(`${BASE_URL}/create-payment-intent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: [{ ...formData }] }),
        })
          .then((res) => res.json())
          .then((data) => {
            setData((v) => ({ ...v, clientSecret: data.clientSecret }));
            sessionStorage.setItem("clientSecret", data.clientSecret);
            // Save data to sessionStorage
            sessionStorage.setItem("formdata", JSON.stringify(formData));

            navigation("checkout");
          })
          .catch((err) => {
            setIsFormValidate(false);
            toast.error(err.message);
          })
          .finally(() => {
            setIsFormValidate(false);
          });
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  useEffect(() => {
    if (data?.userData) {
      const { FirstName, LastName, Email, Phone } = data.userData;
      setFormData((v: FormType) => ({
        ...v,
        FirstName,
        LastName,
        Email,
        Phone,
      }));
    }
  }, [data]);

  return (
    <div className="md:mx-8 p-6 md:p-12 py-16 desktop-1200:p-14 desktop-1500:p-16 desktop-1900:p-24">
      <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-8 desktop-1900:text-5xl">
        Add Details & Pay
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-start justify-between gap-12 max-sm:w-full desktop-1200:gap-14 desktop-1500:gap-16 desktop-1900:gap-24"
      >
        {/* Left Column - Personal Details */}
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm md:text-xl w-full md:w-1/2 desktop-1200:p-8 desktop-1500:p-10 desktop-1900:p-14">
          <div className="space-y-8 desktop-1200:space-y-4 desktop-1900:space-y-6">
            {/* Name Field with Verification Check */}
            <div className="relative">
              <input
                type="text"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleInputChange}
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl"
                placeholder="First Name"
              />
              {errors.FirstName && (
                <p className="text-red-500 text-sm mt-1">{errors.FirstName}</p>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                name="LastName"
                value={formData.LastName}
                onChange={handleInputChange}
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl"
                placeholder="Last Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                disabled={IsFormValidate}
                onChange={handleInputChange}
                className={`w-full border-b ${
                  errors.Email ? "border-red-500" : "border-gray-200"
                } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                placeholder="Email Address"
              />
              {errors.Email && (
                <p className="text-red-500 text-sm mt-1">{errors.Email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <input
                disabled={IsFormValidate}
                type="tel"
                name="Phone"
                value={formData.Phone}
                onChange={handleInputChange}
                className={`w-full border-b ${
                  errors.Phone ? "border-red-500" : "border-gray-200"
                } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                placeholder="Phone Number"
              />
              {errors.Phone && (
                <p className="text-red-500 text-sm mt-1">{errors.Phone}</p>
              )}
            </div>

            {/* Address Field */}
            <div>
              <input
                disabled={IsFormValidate}
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full border-b ${
                  errors.address ? "border-red-500" : "border-gray-200"
                } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                placeholder="Address"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>

            {/* City and ZIP Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  disabled={IsFormValidate}
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full border-b ${
                    errors.city ? "border-red-500" : "border-gray-200"
                  } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                  placeholder="City"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>
              <div>
                <input
                  disabled={IsFormValidate}
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={`w-full border-b ${
                    errors.zipCode ? "border-red-500" : "border-gray-200"
                  } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                  placeholder="Zip Code"
                />
                {errors.zipCode && (
                  <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
                )}
              </div>
            </div>

            {/* Country and Remember Me Row */}
            <div className="flex items-center justify-between">
              <select
                disabled={IsFormValidate}
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className={`w-48 border-b ${
                  errors.country ? "border-red-500" : "border-gray-200"
                } py-3 focus:outline-none focus:border-primary bg-transparent desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
              >
                <option value="">Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
                {/* Add more countries as needed */}
              </select>

              <select
                disabled={IsFormValidate}
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={`w-48 border-b ${
                  errors.country ? "border-red-500" : "border-gray-200"
                } py-3 focus:outline-none focus:border-primary bg-transparent desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
              >
                <option value="">Select Country</option>
                <option value="United States">United States</option>
                {/* Add more countries as needed */}
              </select>

              {/* <label className="flex items-center gap-2 cursor-pointer">
                <input
                  disabled={IsFormValidate}
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                />
                <span className="text-xs md:text-sm text-gray-600 italic desktop-1200:text-sm desktop-1500:text-base desktop-1900:text-lg">
                  Remember me
                </span>
              </label> */}
            </div>
          </div>
        </div>

        {/* Right Column - Payment Details */}
        <div className="space-y-8 w-full md:space-y-0 md:w-1/2 md:h-[550px] flex flex-col justify-between desktop-1200:h-[480px] desktop-1500:h-[520px] desktop-1900:h-[600px]">
          {/* Total Amount */}
          <div className="space-y-8">
            <div className="border-b border-gray-400 pb-2 md:pb-4">
              <div className="flex justify-between items-center">
                <span className="text-[#516072] md:text-md desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-2xl">
                  Total Amount
                </span>
                <span className="text-[#516072] text-xl font-medium flex flex-row items-center gap-2 desktop-1200:text-xl desktop-1500:text-2xl desktop-1900:text-4xl">
                  <div
                    className={`flex items-center justify-center w-6 h-6 ${
                      Number(totalDonationAmount) === 0
                        ? "bg-[#D3D3D3]"
                        : "bg-secondary"
                    } rounded-full desktop-1200:w-7 desktop-1200:h-7 desktop-1500:w-8 desktop-1500:h-8 desktop-1900:w-12 desktop-1900:h-12`}
                  >
                    <span className="text-white text-sm desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl">
                      $
                    </span>
                  </div>
                  {totalDonationAmount}
                </span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="grid grid-cols-2 gap-2 md:gap-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  disabled={IsFormValidate}
                  type="radio"
                  name="paymentMethod"
                  value="cheque"
                  checked={formData.paymentMethod === "cheque"}
                  onChange={handleInputChange}
                  className="w-6 h-6 text-primary"
                />
                <div className="bg-white rounded-md w-full p-3 md:p-6 desktop-1200:p-4 desktop-1500:p-5 desktop-1900:p-7">
                  <span className="max-sm:text-sm desktop-1200:text-sm desktop-1500:text-base desktop-1900:text-xl">
                    Offline <span className="italic">(Cheque)</span>
                  </span>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  disabled={IsFormValidate}
                  type="radio"
                  name="paymentMethod"
                  value="zelle"
                  checked={formData.paymentMethod === "zelle"}
                  onChange={handleInputChange}
                  className="w-6 h-6 text-primary"
                />
                <div className="bg-white rounded-md w-full p-3 md:p-6 desktop-1200:p-4 desktop-1500:p-5 desktop-1900:p-7">
                  <span className="max-sm:text-sm desktop-1200:text-sm desktop-1500:text-base desktop-1900:text-xl">
                    Offline <span className="italic">(Zelle)</span>
                  </span>
                </div>
              </label>
            </div>
          </div>
          <div className="space-y-8">
            {/* Powered by Stripe */}
            {formData.paymentMethod === "online" ? (
              <div className="flex justify-center items-center gap-2">
                <span className="italic text-[#516072] text-sm desktop-1200:text-sm desktop-1500:text-base desktop-1900:text-xl">
                  Payment by
                </span>
                <img
                  src={stripe}
                  alt="Powered by Stripe"
                  className="h-6 desktop-1200:h-6 desktop-1500:h-7 desktop-1900:h-9"
                />
              </div>
            ) : null}

            {/* Submit Button */}
            <button
              disabled={IsFormValidate}
              type="submit"
              className="w-full bg-secondary text-white rounded-full py-3 md:py-4 md:text-xl hover:bg-primary/90 transition-colors desktop-1200:text-base desktop-1200:py-3 desktop-1500:text-lg desktop-1500:py-3 desktop-1900:text-2xl desktop-1900:py-5"
            >
              {IsFormValidate ? (
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Loader className="w-5 h-5 animate-spin text-white" />
                  <span className="ml-2">Loading...</span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Continue
                </motion.div>
              )}
            </button>
          </div>
        </div>
      </form>
      {showModal && (
        <PaymentModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          paymentMethod={modalContent}
        />
      )}
    </div>
  );
}
