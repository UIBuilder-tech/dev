import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ContributePage from "./pages/ContributePage";
import ComingSoon from "./pages/ComingSoon";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import EventsPage from "./pages/EventsPage";
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react";
import { DataProvider, UseDataContext } from "./components/context/DataContext";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import ElementsWrapper from "./components/payment/ElementsWrapper";
import CheckoutForm from "./components/payment/CheckoutForm";
import CompletePage from "./components/payment/CompletePage";
const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
interface StripeOptions {
  appearance: {
    theme: string;
  };
  loader: string;
  clientSecret?: string | null;
}
function App() {
  const [stripeOptions, setStripeOptions] = useState<StripeOptions>({
    appearance: { theme: "stripe" },
    loader: "auto",
  });

  const { data } = UseDataContext();

  const stripePromise: Promise<Stripe | null> = loadStripe(stripePublicKey || "");

  useEffect(() => {
    setStripeOptions((v) => ({ ...v, clientSecret: data?.clientSecret }));
  }, [data?.clientSecret]);


  return (
    <>
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/donate" element={<ContributePage />} />
          <Route path="/contribute" element={<ContributePage />}>
            {
              stripeOptions?.clientSecret ?
                <Route element={<ElementsWrapper stripePromise={stripePromise} options={stripeOptions} />}>
                  <Route path="checkout" element={<CheckoutForm />} />
                  <Route path="complete" element={<CompletePage />} />
                </Route> : null
            }
          </Route>
          <Route path="/events" element={<EventsPage />} />
          <Route path="/profile" element={<ComingSoon />} />
          <Route path="/contact" element={<ComingSoon />} />
          <Route path="/donate" element={<ComingSoon />} />
          <Route path="/join" element={<ComingSoon />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
