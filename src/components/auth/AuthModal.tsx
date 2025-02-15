import { motion, AnimatePresence } from 'framer-motion';
import { Loader, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UseDataContext } from '../context/DataContext';
interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ButtonProps {
  isLoading?: boolean;
  text: string;
  type?: 'button' | 'submit' | 'reset';
}
interface FormDataType {
  FirstName?: string;
  LastName?: string;
  Phone?: string;
  Email?: string;
  Password__c?: string;
  confirmPassword?: string;
}
const CustomButton: React.FC<ButtonProps> = ({
  isLoading = false,
  text,
  type = 'submit',
}) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={`w-full py-3 px-4 text-white rounded transition-colors flex items-center justify-center ${isLoading
        ? 'bg-gray-400 cursor-not-allowed'
        : 'bg-secondary hover:bg-opacity-90'
        }`}
      aria-busy={isLoading}
      aria-label={text}
    >
      {isLoading ? (
        <motion.div
          className='flex items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Loader className='w-5 h-5 animate-spin text-white' />
          <span className='ml-2'>Loading...</span>
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

type ViewType = 'login' | 'register' | 'reset';
export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataType>({});
  const [view, setView] = useState<ViewType>('login');
  const { setData } = UseDataContext();
  const navigate = useNavigate();
  const modalVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const BASE_URL = import.meta.env.VITE_RETURN_BACKEND_API;

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const loginFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsDisable(true);

    const payload = {
      email: formData.Email,
      password: formData.Password__c,
    };
        fetch(`${BASE_URL}/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }).then(resp=>resp?.json())
          .then(response => {
            if (response?.data?.userId) {
                toast.success(response?.message);
                navigate('/profile');
                onClose();
                setData(v => ({ ...v, userData: response?.data }))
                sessionStorage.setItem('user', JSON.stringify(response?.data));
            } else {
                toast.error(response?.message);
            }
            console.log("RESPONSE__>", response)
          })
          .catch(error => {
            toast.error('Something went wrong. Please try again later.');
            console.error(error);
            sessionStorage.removeItem('accessToken');
          })
          .finally(() => {
            setIsDisable(false);
          });
  };

  const forgotFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsDisable(true);

    const payload = {
      forgot_email: formData.Email,
    };
        fetch(`${BASE_URL}/api/auth/check-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }).then(resp=>resp?.json())
          .then(response => {
            if (response?.success) {
                toast.success(response?.message);
                onClose();
            } else {
                toast.error(response?.message);
            }
            console.log("RESPONSE__>", response)
          })
          .catch(error => {
            toast.error('Something went wrong. Please try again later.');
            console.error(error);
          })
          .finally(() => {
            setIsDisable(false);
          });
  };

  const registerFormHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (formData.Password__c !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsDisable(true);

        const payload = {
          firstname: formData.FirstName,
          lastname: formData.LastName,
          usernumber: formData.Phone,
          emailid: formData.Email,
          userpwd: formData.Password__c,
          userconfirmPassword: formData.confirmPassword
        };
        fetch(`${BASE_URL}/api/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }).then(resp=>resp?.json())
          .then(res => {
            if (res.success) {
              toast.success(res?.message);
              setView('login');
            } else {
              toast.error(res?.message);
            }
          })
          .catch(error => {
            toast.error('Something went wrong. Please try again later');
            console.error(error);
          })
          .finally(() => {
            setIsDisable(false);
          });
  };

  const renderContent = () => {
    switch (view) {
      case 'reset':
        return (
          <>
            <div className='text-center mb-6 desktop-1500:text-xs desktop-1200:text-xs desktop-1900:text-sm'>
              <h2 className='text-2xl text-gray-800'>
                FORGOT PASSWORD
              </h2>
              <p className='text-gray-500 mt-2'>
                Forgot your password? Let's get you a new one
              </p>
            </div>
            <form onSubmit={forgotFormHandler} className='space-y-4 desktop-1200:text-xs desktop-1900:text-sm'>
              <input
                required
                onChange={changeHandler}
                name='Email'
                value={formData.Email || ''}
                type='email'
                placeholder='Enter your registered email'
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20'
              />
              <CustomButton text='SUBMIT' isLoading={isDisable} />
            </form>
            <div className='mt-6 text-center desktop-1200:text-xs desktop-1900:text-sm'>
              <p>
                Already have an account?{' '}
                <button
                  onClick={() => setView('login')}
                  className='text-secondary hover:underline'
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
            <div className='text-center mb-6 desktop-1500:text-xs desktop-1200:text-xs desktop-1900:text-sm'>
              <h2 className='text-2xl  text-gray-800'>JOIN CHF</h2>
              <p className='text-gray-500 mt-2'>
                We are glad you have chosen to register with us, Welcome!
              </p>
            </div>
            <form onSubmit={registerFormHandler} className='space-y-4 desktop-1200:text-xs desktop-1900:text-sm desktop-1200:space-y-2'>
              <input
                required
                onChange={changeHandler}
                name='FirstName'
                value={formData.FirstName || ''}
                type='text'
                placeholder='First Name'
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20'
              />
              <input
                onChange={changeHandler}
                name='LastName'
                value={formData.LastName || ''}
                type='text'
                placeholder='Last Name'
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20'
              />
              <input
                required
                onChange={changeHandler}
                name='Phone'
                value={formData.Phone || ''}
                type='tel'
                placeholder='Number as (999) 999-9999'
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20'
              />
              <input
                required
                onChange={changeHandler}
                name='Email'
                value={formData.Email || ''}
                type='email'
                placeholder='Email Address'
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20'
              />
              <input
                required
                onChange={changeHandler}
                name='Password__c'
                value={formData.Password__c || ''}
                type='password'
                placeholder='Password minimum 6 characters'
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20'
              />
              <input
                required
                onChange={changeHandler}
                name='confirmPassword'
                value={formData.confirmPassword || ''}
                type='password'
                placeholder='Confirm Password'
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20'
              />
              <p className='text-sm text-gray-500 desktop-1200:text-xs'>
                Password must be 6 to 20 characters long with at least one
                digit, one uppercase & one lower case.
              </p>
              <CustomButton text='JOIN' isLoading={isDisable} />
            </form>
            <div className='mt-6 text-center desktop-1200:text-xs desktop-1900:text-sm'>
              <p>
                Already have an account?{' '}
                <button
                  onClick={() => setView('login')}
                  className='text-secondary hover:underline'
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
            <div className='text-center mb-6 desktop-1500:text-xs desktop-1200:text-xs desktop-1900:text-lg'>
              <h2 className='text-2xl text-gray-800'>LOG ON</h2>
              <p className='text-gray-600 mt-2'>Your space to be social</p>
            </div>
            <form onSubmit={loginFormHandler} className='space-y-4 desktop-1200:text-xs desktop-1900:text-sm desktop-1200:space-y-2'>
              <input
                required
                onChange={changeHandler}
                name='Email'
                value={formData.Email || ''}
                type='email'
                placeholder='Email Address'
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20'
              />
              <input
                required
                onChange={changeHandler}
                name='Password__c'
                value={formData.Password__c || ''}
                type='password'
                placeholder='Password'
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20'
              />
              <CustomButton text='LOG IN' isLoading={isDisable} />
            </form>
            <div className='mt-6 text-center desktop-1200:text-xs desktop-1900:text-sm'>
              <button
                onClick={() => setView('reset')}
                className='text-gray-600 hover:text-secondary'
              >
                Forgot Password?
              </button>
              <p className='mt-4'>
                Don't have an account?{' '}
                <button
                  onClick={() => setView('register')}
                  className='text-secondary hover:underline'
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Overlay */}
          <motion.div
            className='fixed inset-0 bg-black/50 z-50'
            variants={overlayVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            onClick={onClose}
          />
          {/* Modal */}
          <motion.div
            className='fixed top-[5%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 w-full max-w-md z-50 overflow-hidden'
            style={{ maxHeight: '90vh', overflowY: 'auto' }} // Add scrolling behavior
            variants={modalVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className='absolute right-4 top-4 text-gray-500 hover:text-gray-700'
            >
              <X className='h-6 w-6' />
            </button>
            {/* Content */}
            {renderContent()}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
