import { useState, FormEvent } from "react";
import { Check, Phone, Mail } from "lucide-react";
import volunteerGroup from "../../assets/volunteerGroup.svg";

interface FormData {
  category: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function VolunteerForm() {
  const [formData, setFormData] = useState<FormData>({
    category: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isNameVerified, setIsNameVerified] = useState(true);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="bg-white relative">
      <div className="px-6 max-sm:pt-8 max-sm:pb-[150px] md:py-16 max-w-7xl mx-auto">
        <h1 className=" text-center text-[#02306A] text-3xl md:text-4xl font-display text-gray-900 mb-8 desktop-1900:text-5xl">
          Volunteer
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1.75fr_1fr] gap-10 md:gap-16">
          {/* Left Column - Description and Image */}
          <div className="space-y-8">
            <div className="space-y-6 md:text-xl max-w-[80%] max-sm:contents desktop-1200:text-sm desktop-1500:text-lg desktop-1900:text-xl">
              <p className="text-[#808080] font-medium leading-6">
                We offer volunteering opportunities in the US as well as
                community projects in and around Chitrapur/Shirali.
              </p>

              <p className="text-[#808080] font-medium leading-6">
                Become a part of the solution to community's challenges by
                showing them how even your smallest action can make a
                significant difference in the lives of others.For more
                information on how you can become a CHF Volunteer, please
                contact us via phone or email as shown below-
              </p>

              <div className="space-y-3">
                <a
                  href="tel:(215) 666 3200"
                  className="flex items-center gap-2 text-[#516072] hover:text-primary/90"
                >
                  <Phone className="h-5 w-5 text-secondary " />
                  <span className="underline">(215) 666 3200</span>
                </a>

                <a
                  href="mailto:contactus@chfusa.org"
                  className="flex items-center gap-2 text-[#516072] hover:text-primary/90"
                >
                  <Mail className="h-5 w-5 text-secondary" />
                  <span className="underline">contactus@chfusa.org</span>
                </a>
              </div>
            </div>

            {/* Illustration */}
            <div className="absolute bottom-0">
              <img
                src={volunteerGroup}
                alt="Volunteer illustration"
                className="w-full max-w-lg"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-8 desktop-1200:space-y-4 desktop-1900:space-y-6 desktop-1500:space-y-6 max-w-[80%] max-sm:contents"
            >
              <div>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`w-full border-b ${
                    errors.category ? "border-red-500" : "border-gray-200"
                  } py-3 focus:outline-none focus:border-primary bg-transparent`}
                >
                  <option value="">Select Category</option>
                  <option value="education">Education</option>
                  <option value="heritage">Heritage</option>
                  <option value="women">Women Empowerment</option>
                  <option value="general">General</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">{errors.category}</p>
                )}
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl"
                  placeholder="Full Name"
                />
                {isNameVerified && (
                  <Check className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500 h-5 w-5" />
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={` ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  } w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                  placeholder="Email Address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={` ${
                    errors.phone ? "border-red-500" : "border-gray-200"
                  } w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                  placeholder="Phone Number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={` ${
                    errors.address ? "border-red-500" : "border-gray-200"
                  } w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                  placeholder="Address"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={` ${
                      errors.city ? "border-red-500" : "border-gray-200"
                    } w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
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
                    className={` ${
                      errors.zipCode ? "border-red-500" : "border-gray-200"
                    } w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl`}
                    placeholder="Zip Code"
                  />
                  {errors.zipCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.zipCode}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`${
                    errors.country ? "border-red-500" : "border-gray-200"
                  } w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xlt`}
                >
                  <option value="">Country</option>
                  <option value="US">United States</option>
                  <option value="IN">India</option>
                  {/* Add more countries as needed */}
                </select>
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white rounded-full py-3 hover:bg-primary/90 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
