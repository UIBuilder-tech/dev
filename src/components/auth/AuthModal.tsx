import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiCalling, { GetAccessToken } from '../api/ApiCalling';
import { toast } from 'react-toastify';
const loginUrl = import.meta.env.VITE_API_SALESFORCE_LOGIN_API;
const clientId = import.meta.env.VITE_API_SALESFORCE_CLIENT_ID;
const clientCecret = import.meta.env.VITE_API_SALESFORCE_CLIENT_SECRET;
const userName = import.meta.env.VITE_API_SALESFORCE_USER_NAME;
const userPassword = import.meta.env.VITE_API_SALESFORCE_USER_PASSWORD;
const instance = import.meta.env.VITE_API_SALESFORCE_INSTACE;

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormDataType {
  FirstName?: string;
  LastName?: string;
  Phone?: string;
  Email?: string;
  Password__c?: string;
  confirmPassword?: string;
}

type ViewType = 'login' | 'register' | 'reset';
export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isDisable, setIsDisable] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormDataType>({});
  const [view, setView] = useState<ViewType>('login');
  const navigate = useNavigate();
  const modalVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loginFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsDisable(true)
    const query = `SELECT Id, FirstName, LastName, Email, Password__c FROM Contact WHERE Email = '${formData.Email}'`;
    const encodedQuery = encodeURIComponent(query);
    const urlData = `/services/data/v57.0/query?q=${encodedQuery}`;
    console.log("🚀 ~ loginFormHandler ~ urlData:", urlData)
    // GetAccessToken().then((data) => {
    //   const accessToken = data.access_token;
    //   ApiCalling(urlData)
    //     .then((response) => {
    //       console.log("🚀 ~ .then ~ response:", response)
    //       const { totalSize, records } = response;
    //       // if (records.length > 0) {
    //       //   if (totalSize === 0) {
    //       //     toast.error('User not found');
    //       //   } else {
    //       //     sessionStorage.setItem('accessToken', accessToken);
    //       //     toast.success('User successfully logged in.');
    //       //     navigate('/profile');
    //       //     sessionStorage.setItem("user", JSON.stringify(records[0]));
    //       //   }
    //       // } else {
    //       //   const resData = response
    //       //   resData.forEach((v) => {
    //       //     if (v?.message) {
    //       //       toast.error(v.message);
    //       //     }
    //       //   })
    //       // }

    //     })
    //     .catch((error) => {
    //       toast.error('request Failed');
    //       console.error(error);
    //     }).finally(() => {
    //       setIsDisable(false)
    //     });
    // }).catch(e => {
    //   toast.error('Failed to get access token');
    // })
  };
  const registerFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.Password__c !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return
    }
    const urlData = "/salesforce/services/data/v57.0/sobjects/Contact";
    setIsDisable(true)
    GetAccessToken().then((data) => {
      const accessToken = data.access_token;
      console.log("🚀 ~ GetAccessToken ~ accessToken:", accessToken)
      sessionStorage.setItem('accessToken', accessToken);
      const insertData = {
        FirstName: formData.FirstName,
        LastName: formData.LastName,
        Phone: formData.Phone,
        Email: formData.Email,
        Password__c: formData.Password__c,
      }
      ApiCalling(urlData, 'POST', insertData)
        .then((res) => {
          if (res.success) {
            toast.success('User successfully registered. Please login first');
            setView("login")
          } else {
            toast.error('Failed to register. Please try again later');
          }
        })
        .catch((error) => {
          toast.error('Request failed. Please try again later');
          console.error(error);
        }).finally(() => {
          setIsDisable(false)
        });
    }).catch(e => {
      toast.error('Failed to get access token');
    })

  }
  const renderContent = () => {
    switch (view) {
      case 'reset':
        return (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">RESET PASSWORD</h2>
              <p className="text-gray-500 mt-2">Forgot your password? Let's get you a new one</p>
            </div>
            <form onSubmit={loginFormHandler} className="space-y-4">
              <input
                required
                onChange={changeHandler}
                name="Email"
                value={formData.Email || ''}
                type="email"
                placeholder="Enter your registered email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <button
                type="submit"
                className="w-full py-3 px-4 bg-secondary text-white rounded hover:bg-opacity-90 transition-colors"
              >
                RESET PASSWORD
              </button>
            </form>
            <div className="mt-6 text-center">
              <p>
                Already have an account?{' '}
                <button
                  disabled={isDisable}
                  onClick={() => setView('login')}
                  className="text-secondary hover:underline"
                >
                  Log On
                </button>
              </p>
            </div>
          </>
        );
      case 'register':
        return (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">JOIN CHF</h2>
              <p className="text-gray-500 mt-2">We are glad you have chosen to register with us, Welcome!</p>
            </div>
            <form onSubmit={registerFormHandler} className="space-y-4">
              <input
                required
                onChange={changeHandler}
                name="FirstName"
                value={formData.FirstName || ''}
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <input
                onChange={changeHandler}
                name="LastName"
                value={formData.LastName || ''}
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <input
                required
                onChange={changeHandler}
                name="Phone"
                value={formData.Phone || ''}
                type="tel"
                placeholder="Number as (999) 999-9999"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <input
                required
                onChange={changeHandler}
                name="Email"
                value={formData.Email || ''}
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <input
                required
                onChange={changeHandler}
                name="Password__c"
                value={formData.Password__c || ''}
                type="password"
                placeholder="Password minimum 6 characters"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <input
                required
                onChange={changeHandler}
                name="confirmPassword"
                value={formData.confirmPassword || ''}
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <p className="text-sm text-gray-500">
                Password must be 6 to 20 characters long with at least one digit, one uppercase & one lower case.
              </p>
              <button
                disabled={isDisable}
                type="submit"
                className="w-full py-3 px-4 bg-secondary text-white rounded hover:bg-opacity-90 transition-colors"
              >
                JOIN
              </button>
            </form>
            <div className="mt-6 text-center">
              <p>
                Already have an account?{' '}
                <button
                  onClick={() => setView('login')}
                  className="text-secondary hover:underline"
                >
                  Log On
                </button>
              </p>
            </div>
          </>
        );
      default: // login
        return (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">LOG ON</h2>
              <p className="text-gray-600 mt-2">Your space to be social</p>
            </div>
            <form onSubmit={loginFormHandler} className="space-y-4">
              <input
                required
                onChange={changeHandler}
                name="Email"
                value={formData.Email || ''}
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <input
                required
                onChange={changeHandler}
                name="Password__c"
                value={formData.Password__c || ''}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <button
                type="submit"
                className="w-full py-3 px-4 bg-secondary text-white rounded hover:bg-opacity-90 transition-colors"
              >
                LOG ON
              </button>
            </form>
            <div className="mt-6 text-center">
              <button
                onClick={() => setView('reset')}
                className="text-gray-600 hover:text-secondary"
              >
                Forgot Password?
              </button>
              <p className="mt-4">
                Don't have an account?{' '}
                <button
                  onClick={() => setView('register')}
                  className="text-secondary hover:underline"
                >
                  Join CHF
                </button>
              </p>
            </div>
          </>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          <motion.div
            className="fixed top-[10%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 w-full max-w-md z-50"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            {renderContent()}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

