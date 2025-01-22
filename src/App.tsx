import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import ContributePage from "./pages/ContributePage";
import ComingSoon from "./pages/ComingSoon";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import EventsPage from "./pages/EventsPage";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { UseDataContext } from "./components/context/DataContext";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import ElementsWrapper from "./components/payment/ElementsWrapper";
import CheckoutForm from "./components/payment/CheckoutForm";
import CompletePage from "./components/payment/CompletePage";
import Profile from "./pages/ProfilePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import EmailVerification from "./pages/EmailVerification";
import ForgotPassword from "./pages/ForgotPassword";
import { ImagePreviewProvider } from "./context/ImagePreviewContext";
import ImagePreview from "./components/ImagePreview";
import LoaderComponents from "./components/loder/LoderComponents";
const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
interface StripeOptions {
  appearance: {
    theme: string;
  };
  loader: string;
  clientSecret?: string | null;
}
function App() {
  const [showPrivateRoute, setShowPrivateRoute] = useState<boolean>(false);
  const [stripeOptions, setStripeOptions] = useState<StripeOptions>({
    appearance: { theme: "stripe" },
    loader: "auto",
  });
  const location = useLocation();
  const { data ,setData} = UseDataContext();

  const stripePromise: Promise<Stripe | null> = loadStripe(
    stripePublicKey || ""
  );

  useEffect(() => {
    setStripeOptions((v) => ({ ...v, clientSecret: data?.clientSecret }));
  }, [data?.clientSecret]);

  useEffect(() => {
    if (data?.userData) {
      setShowPrivateRoute(true);
    }
  }, [data?.userData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  useEffect(() => {
    setData(v=>({...v,isLoading:false}));
    return setData(v=>({...v,isLoading:true}));
  }, [])
  
  return (
    <>
      <LoaderComponents isLoading={data.isLoading} />
      <ImagePreviewProvider>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* <Route path="/contribute" element={<ContributePage />} /> */}
          <Route path="/donate" element={<ContributePage />} />
          <Route path="/contribute" element={<ContributePage />}>
            {stripeOptions?.clientSecret ? (
              <Route
                element={
                  <ElementsWrapper
                    stripePromise={stripePromise}
                    options={stripeOptions}
                  />
                }
              >
                <Route path="checkout" element={<CheckoutForm />} />
                <Route path="complete" element={<CompletePage />} />
              </Route>
            ) : null}
          </Route>
          <Route path="/events" element={<EventsPage />} />
          {showPrivateRoute ? (
            <Route path="/profile" element={<Profile />} />
          ) : null}
          <Route path="/contact" element={<ComingSoon />} />
          <Route path="/donate" element={<ComingSoon />} />
          <Route path="/join" element={<ComingSoon />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route
            path="/activate/:uidb64/:token"
            element={<EmailVerification />}
          />
          <Route
            path="/reset-password/:uidb64/:token"
            element={<ForgotPassword />}
          />
        </Routes>
        <ImagePreview />
      </ImagePreviewProvider>
    </>
  );
}
export default App;
