import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";
import ModalComponent from "../modal/ModalComponent";
import "./PaymentPage.css";
import { UseDataContext } from "../context/DataContext";

interface ElementsWrapperProps {
  stripePromise: Promise<Stripe | null>;
  options: any;
}

const ElementsWrapper: React.FC<ElementsWrapperProps> = ({ stripePromise, options }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const location = useLocation();
  const Navigation = useNavigate();
  const { setData } = UseDataContext()

  const modalCloseHandler = () => {
    setIsModalOpen(false);
    sessionStorage.removeItem("clientSecret");
    Navigation("/contribute")
    setData(v => ({ ...v, clientSecret: null }))
  };

  return (
    <ModalComponent
      title="Payment Option"
      showCloseButton={location.pathname !== "/contribute/checkout"}
      isOpen={isModalOpen}
      onClose={modalCloseHandler}
    >
      <div className="App">
        <Elements stripe={stripePromise} options={options}>
          <Outlet />
        </Elements>
      </div>
    </ModalComponent>
  );
};

export default ElementsWrapper;
