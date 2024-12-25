import { useState, FormEvent, useEffect } from 'react'
import stripe from '../../assets/stripe.svg'
import { UseDataContext } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import paypal from "../../assets/paypal.svg";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  paymentMethod: "paypal" | "cheque" | "zelle";
  rememberMe: boolean;
}

interface FormErrors {
  [key: string]: string;
}

interface Props {
  totalDonationAmount: number;
}

export default function PaymentForm({ totalDonationAmount }: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    paymentMethod: "paypal",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isNameVerified, setIsNameVerified] = useState(false);
  const totalAmount = sessionStorage.getItem("totalDonationAmount");
  console.log("totalAmount", totalAmount);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
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

  return (
    <div className="md:mx-8 p-6 md:p-12 py-16 desktop-1200:p-14 desktop-1500:p-16 desktop-1900:p-24">
      <h2 className="text-3xl md:text-5xl font-display text-gray-900 mb-8 desktop-1200:text-4xl desktop-1500:text-[2.5rem] desktop-1900:text-5xl">
        Add Details & Pay
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-start justify-between gap-12 desktop-1200:gap-14 desktop-1500:gap-16 desktop-1900:gap-24"
      >
        {/* Left Column - Personal Details */}
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm text-xl w-full md:w-1/2 desktop-1200:p-8 desktop-1500:p-10 desktop-1900:p-14">
          <div className="space-y-8">
            {/* Name Field with Verification Check */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-2xl"
                placeholder="Full Name"
              />
              {isNameVerified && (
                <Check className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500 h-5 w-5" />
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full border-b ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-2xl`}
                placeholder="Email Address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full border-b ${
                  errors.phone ? "border-red-500" : "border-gray-200"
                } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-2xl`}
                placeholder="Phone Number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Address Field */}
            <div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full border-b ${
                  errors.address ? "border-red-500" : "border-gray-200"
                } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-2xl`}
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
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full border-b ${
                    errors.city ? "border-red-500" : "border-gray-200"
                  } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-2xl`}
                  placeholder="City"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={`w-full border-b ${
                    errors.zipCode ? "border-red-500" : "border-gray-200"
                  } py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-2xl`}
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
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={`w-48 border-b ${
                  errors.country ? "border-red-500" : "border-gray-200"
                } py-3 focus:outline-none focus:border-primary bg-transparent desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-2xl`}
              >
                <option value="">Country</option>
                <option value="US">United States</option>
                <option value="IN">India</option>
                {/* Add more countries as needed */}
              </select>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                />
                <span className="text-xs md:text-sm text-gray-600 italic desktop-1200:text-sm desktop-1500:text-base desktop-1900:text-lg">
                  Remember me
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column - Payment Details */}
        <div className="space-y-8 md:space-y-0 md:w-1/2 md:h-[550px] flex flex-col justify-between desktop-1200:h-[480px] desktop-1500:h-[520px] desktop-1900:h-[600px]">
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
              <label className="flex items-center gap-3 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleInputChange}
                  className="w-6 h-6 text-primary"
                />
                <div className="bg-white rounded-md w-full p-3 md:p-6 desktop-1200:p-4 desktop-1500:p-5 desktop-1900:p-7">
                  <img
                    src={paypal}
                    alt="PayPal"
                    className="w-24 desktop-1200:w-24 desktop-1500:w-28 desktop-1900:w-36"
                  />
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
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
            <div className="flex justify-center items-center gap-2">
              <span className="italic text-[#516072] text-sm desktop-1200:text-sm desktop-1500:text-base desktop-1900:text-xl">
                Powered by
              </span>
              <img
                src={stripe}
                alt="Powered by Stripe"
                className="h-6 desktop-1200:h-6 desktop-1500:h-7 desktop-1900:h-9"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-secondary text-white rounded-full py-3 md:py-4 md:text-xl hover:bg-primary/90 transition-colors desktop-1200:text-base desktop-1200:py-3 desktop-1500:text-lg desktop-1500:py-3 desktop-1900:text-2xl desktop-1900:py-5"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
