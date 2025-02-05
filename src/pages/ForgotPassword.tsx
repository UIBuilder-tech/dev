import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "lucide-react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import heritage1 from "../assets/heritage1.webp";
import { UseDataContext } from "../components/context/DataContext";

interface ButtonProps {
  isLoading?: boolean;
  text: string;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<ButtonProps> = ({
  isLoading = false,
  text,
  type = "submit",
}) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={`w-full py-3 px-4 text-white rounded transition-colors flex items-center justify-center ${isLoading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-secondary hover:bg-opacity-90"
        }`}
      aria-busy={isLoading}
      aria-label={text}
    >
      {isLoading ? (
        <motion.div
          className="flex items-center"
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
          {text}
        </motion.div>
      )}
    </button>
  );
};

const ForgotPassword = ({ isForgot = false }) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [passwords, setPasswords] = useState({ old: "", new: "", confirm: "" });
  const navigate = useNavigate();
  const { uidb64, token } = useParams();
  const { data, setData } = UseDataContext()

  const BASE_URL = import.meta.env.VITE_RETURN_BACKEND_API;
  const apiCalledRef = useRef(false);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    if (apiCalledRef.current) return; // Skip if API has already been called
    apiCalledRef.current = true; // Mark API as called
    e.preventDefault();
    // Handle password update logic here
    const payload: any = {
      uidb64: uidb64,
      newPassword: passwords?.new,
      confirmPassword: passwords?.confirm,
    };
    setIsVerifying(true);
    try {
      const response = await fetch(`${BASE_URL}auth/${isForgot ? 'forgot-password' : 'reset-password'}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (data?.success) {
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error(error);
    } finally {
      setIsVerifying(false);
    }
  };
  useEffect(() => {
    setData(v => ({ ...v, isLoading: false }))
  }, [data])


  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heritage1})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-[9] bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            {isForgot ? 'Change' : "Reset"}  Password
          </p>
        </div>
        <form onSubmit={handlePasswordSubmit} className="space-y-6">
          {!isForgot && <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Old Password
            </label>
            <input
              type="password"
              value={passwords.old}
              onChange={(e) =>
                setPasswords((prev) => ({ ...prev, old: e.target.value }))
              }
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
            />
          </div>
          }

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              value={passwords.new}
              onChange={(e) =>
                setPasswords((prev) => ({ ...prev, new: e.target.value }))
              }
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
            />
            <p className="text-sm text-gray-500 mt-1">
              Password must be 6 to 20 characters long with at least one digit,
              one uppercase and one lowercase letter.
            </p>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords((prev) => ({
                  ...prev,
                  confirm: e.target.value,
                }))
              }
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1572E8] transition-all duration-200"
            />
          </div>
          {/* <button
              type="submit"
              className="w-full px-6 py-3 bg-[#E67E22] text-white rounded-full hover:bg-[#E67E22]/90 transition-colors duration-200"
            >
              Update Password
            </button> */}
          <CustomButton text="Update Password" isLoading={isVerifying} />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
