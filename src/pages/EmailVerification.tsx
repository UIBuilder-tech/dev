import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "lucide-react";
import { toast } from "react-toastify";
import heritage1 from "../assets/heritage1.webp";

const EmailVerification = () => {
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(true);
  const navigate = useNavigate();
  const { uidb64, token } = useParams();

  const BASE_URL = import.meta.env.VITE_RETURN_BACKEND_API;
  const apiCalledRef = useRef(false);

  useEffect(() => {
    const verifyEmail = async () => {
      if (apiCalledRef.current) return; // Skip if API has already been called
      apiCalledRef.current = true; // Mark API as called

      try {
        const response = await fetch(`${BASE_URL}/activate/${uidb64}/${token}`);
        const data = await response.json();

        if (data?.success) {
          toast.success(data.message);
          navigate("/");
          setIsVerified(true)
        } else {
          setIsVerified(false)
          toast.error(data.message);
        }
        console.log("RESPONSE__>", data);
      } catch (error) {
        toast.error("Something went wrong. Please try again later.");
        setIsVerified(false)
        console.error(error);
      } finally {
        setIsVerifying(false);
      }
    };

    verifyEmail();
  }, [BASE_URL, uidb64, token, navigate]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heritage1})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-[9] p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Email Verification</h1>
        {isVerifying ? (
          <div className="flex flex-col items-center">
            <Loader className="animate-spin h-10 w-10 text-blue-500 mb-4" />
            <p>Verifying your email...</p>
          </div>
        ) : (isVerified ?
          <p>Verification Successful!!.</p>
:
          <p>Verification failed. Please try again or contact support.</p>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
