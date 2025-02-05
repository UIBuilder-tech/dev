import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, DollarSign, Mail, CreditCard } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentMethod: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  paymentMethod,
}) => {
  const modalContent = {
    check: {
      title: "Offline Check Donation",
      icon: <CreditCard className="w-12 h-12 text-secondary" />,
      content: (
        <div className="space-y-4">
          <p className="font-semibold text-gray-700">
            Please follow the steps below for Check Payment:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-medium text-gray-800">
              Send check made payable to:
            </p>
            <p className="text-primary">"Chitrapur Heritage Foundation"</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-medium text-gray-800">Mail to:</p>
            <address className="not-italic text-gray-600">
              The Treasurer,
              <br />
              Chitrapur Heritage Foundation USA Inc.
              <br />
              P.O. Box 1253
              <br />
              Langhorne, PA 19047
            </address>
          </div>
        </div>
      ),
    },
    zelle: {
      title: "Offline Zelle Donation",
      icon: <DollarSign className="w-12 h-12 text-secondary" />,
      content: (
        <div className="space-y-4">
          <p className="font-semibold text-gray-700">
            Please follow these steps for Zelle Payment:
          </p>
          <ol className="list-none space-y-3">
            {[
              "Send your Zelle payments to our email: donations@chfusa.org",
              "Login to your bank account (if it offers Zelle)",
              "Add Chitrapur Heritage Foundation as a Payee",
              "Zelle offers you option to send money to email or phone number",
              "Please use our email id donations@chfusa.org",
              "Indicate how you want us to handle your donation split between Vantiga, Shrivali school, Special Projects etc.",
            ].map((step, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-1" />
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      ),
    },
  };

  const { title, icon, content } =
    modalContent[paymentMethod as keyof typeof modalContent];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl text-gray-800 flex items-center">
                  <div
                    className={`flex items-center justify-center w-6 h-6 bg-secondary rounded-full desktop-1200:w-7 desktop-1200:h-7 desktop-1500:w-8 desktop-1500:h-8 desktop-1900:w-12 desktop-1900:h-12`}
                  >
                    <span className="text-white text-sm desktop-1200:text-base desktop-1500:text-lg desktop-1900:text-xl">
                      $
                    </span>
                  </div>
                  <span className="ml-3">{title}</span>
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary rounded-full p-1"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="text-gray-600">{content}</div>
            </div>
            <div className="bg-gray-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <Mail className="w-4 h-4 mr-2" />
                <span>Support: support@chfusa.org</span>
              </div>
              <button
                onClick={onClose}
                className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;
