import "./Loader.css";

export default function LoaderComponent({ isLoading=false }) {
  if (!isLoading) return null;

  return (
    <div className="three-body-container">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>)
}
