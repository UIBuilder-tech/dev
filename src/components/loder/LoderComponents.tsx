import "./Loader.css";
import logo from '../../assets/chfLogo.png';
import { useEffect } from "react";


export default function LoaderComponent({ isLoading=false }) {
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isLoading]);
  if (!isLoading) return null;

  return (
    <div className="three-body-container">
      <div className="three-body flex flex-col items-center">
      <img loading="lazy" src={logo} className=""/>
      <section className="dots-container py-5">
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
</section>
</div>
</div>)
}
