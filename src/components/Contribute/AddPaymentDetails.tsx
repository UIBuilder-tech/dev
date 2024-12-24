import { useState, FormEvent } from 'react'
import { Check } from 'lucide-react'
import stripe from '../../assets/stripe.svg'
import paypal from '../../assets/paypal.svg'
import { UseDataContext } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

interface FormErrors {
  [key: string]: string
}
interface FormType {
  id: number; // A unique identifier (e.g., timestamp)
  name: string; // Name of the user
  email: string; // Email address
  phone: string; // Phone number
  address: string; // Address line
  city: string; // City name
  zipCode: string; // Zip/postal code
  country: string; // Country name
  paymentMethod: string; // Payment method (e.g., 'online', 'offline')
  rememberMe: boolean; // Whether the user opts for "remember me"
  amount: string | null; // Total amount
}


interface Props{
  totalDonationAmount:number;
}


export default function PaymentForm({totalDonationAmount}:Props) {
  const totalAmount = sessionStorage.getItem("totalDonationAmount")

  // Usage
  const defaultForm: FormType = {
    id: Date.now(),
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    paymentMethod: 'online',
    rememberMe: false,
    amount: totalAmount
  };
  const [formData, setFormData] = useState<FormType>(defaultForm)

  const [errors, setErrors] = useState<FormErrors>({})
  const [isNameVerified, setIsNameVerified] = useState<boolean>(false)
  const [IsFormValidate, setIsFormValidate] = useState<boolean>(false)
  const navigation = useNavigate();
  const { setData } = UseDataContext();
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number'
    }

    if (!formData.address) {
      newErrors.address = 'Address is required'
    }

    if (!formData.city) {
      newErrors.city = 'City is required'
    }

    if (!formData.zipCode) {
      newErrors.zipCode = 'ZIP code is required'
    }

    if (!formData.country) {
      newErrors.country = 'Country is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsFormValidate(true)
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ ...formData }] }),
      })
        .then((res) => res.json())
        .then((data) => {
          setData((v) => ({ ...v, clientSecret: data.clientSecret }))
          sessionStorage.setItem('clientSecret', data.clientSecret)
          // Save data to sessionStorage
          sessionStorage.setItem('formdata', JSON.stringify(formData));

          navigation("checkout")
        }).catch((err) => {
          toast.error(err.message)
        });

      // console.log('Form submitted:', formData)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className=" md:mx-8 p-6 md:p-12 py-16">
      <h2 className="text-3xl md:text-5xl font-display text-gray-900 mb-8">Add Details & Pay</h2>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Column - Personal Details */}
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm text-xl">
          <div className="space-y-8">
            {/* Name Field with Verification Check */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-primary"
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
                disabled={IsFormValidate}
                onChange={handleInputChange}
                className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-gray-200'} py-3 focus:outline-none focus:border-primary`}
                placeholder="Email Address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone Field */}
            <div>
              <input
                disabled={IsFormValidate}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full border-b ${errors.phone ? 'border-red-500' : 'border-gray-200'} py-3 focus:outline-none focus:border-primary`}
                placeholder="Phone Number"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Address Field */}
            <div>
              <input
                disabled={IsFormValidate}
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full border-b ${errors.address ? 'border-red-500' : 'border-gray-200'} py-3 focus:outline-none focus:border-primary`}
                placeholder="Address"
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
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
                  className={`w-full border-b ${errors.city ? 'border-red-500' : 'border-gray-200'} py-3 focus:outline-none focus:border-primary`}
                  placeholder="City"
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              <div>
                <input
                  disabled={IsFormValidate}
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={`w-full border-b ${errors.zipCode ? 'border-red-500' : 'border-gray-200'} py-3 focus:outline-none focus:border-primary`}
                  placeholder="Zip Code"
                />
                {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
              </div>
            </div>

            {/* Country and Remember Me Row */}
            <div className="flex items-center justify-between">
              <select
                disabled={IsFormValidate}
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={`w-48 border-b ${errors.country ? 'border-red-500' : 'border-gray-200'} py-3 focus:outline-none focus:border-primary bg-transparent`}
              >
                <option value="">Country</option>
                <option value="US">United States</option>
                <option value="IN">India</option>
                {/* Add more countries as needed */}
              </select>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  disabled={IsFormValidate}
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                />
                <span className="text-xs md:text-sm text-gray-600 italic">Remember me</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column - Payment Details */}
        <div className="space-y-8 md:space-y-0 md:w-1/2 md:h-[550px] flex flex-col justify-between">
          {/* Total Amount */}
          <div className='space-y-8'>
          <div className="border-b border-gray-400 pb-2 md:pb-4">
            <div className="flex justify-between items-center">
              <span className="text-[#516072] md:text-md">Total Amount</span>
              <span className="text-[#516072] text-xl font-medium flex flex-row items-center gap-2"><div className={`flex items-center justify-center w-6 h-6 ${Number(totalDonationAmount)===0 ? "bg-[#D3D3D3]" : "bg-secondary"} rounded-full`}>
          <span className="text-white text-sm">$</span>
        </div> {totalDonationAmount}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="grid grid-cols-2 gap-2 md:gap-6">
            <label className="flex items-center gap-3 rounded-lg cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === 'paypal'}
                onChange={handleInputChange}
                className="w-6 h-6 text-primary"
              />
              <div className='bg-white rounded-md w-full p-3 md:p-6'>
              <img src={paypal} alt="PayPal" className="w-24" />
              </div>
            </label> */}

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                disabled={IsFormValidate}
                type="radio"
                name="paymentMethod"
                value="online"
                checked={formData.paymentMethod === 'online'}
                onChange={handleInputChange}
                className="w-6 h-6 text-primary"
              />
              <div className='bg-white rounded-md w-full p-3 md:p-6'>
              <span className='max-sm:text-sm'>Offline <span className='italic'>(Cheque)</span></span>
              </div>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                disabled={IsFormValidate}
                type="radio"
                name="paymentMethod"
                value="cheque"
                checked={formData.paymentMethod === 'cheque'}
                onChange={handleInputChange}
                className="w-6 h-6 text-primary"
              />
              <div className='bg-white rounded-md w-full p-3 md:p-6'>
              <span className='max-sm:text-sm'>Offline <span className='italic'>(Zelle)</span></span>
              </div>
            </label>
          </div>
          </div>
          <div className='space-y-8'>
          {/* Powered by Stripe */}
          {formData.paymentMethod === 'online' ?
            <div className="flex justify-center items-center gap-2">
              <span className='italic text-[#516072] text-sm'>Payment by</span>
              <img src={stripe} alt="Powered by Stripe" className="h-6" />
            </div> : null}

          {/* Submit Button */}
          <button
            disabled={IsFormValidate}
            type="submit"
            className="w-full bg-secondary text-white rounded-full py-3 md:py-4 md:text-xl hover:bg-primary/90 transition-colors"
          >
            Continue
          </button>
          </div>
        </div>
      </form>
    </div>
  )
}
