import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const BASE_URL = import.meta.env.VITE_RETURN_BACKEND_API;

export default function AdminVerifyPage() {
  const { contactId, status } = useParams();
  const navigation = useNavigate();
  console.log(contactId, status);
  useEffect(() => {
    fetch(`${BASE_URL}activate/admin/${contactId}/${status}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp?.json())
      .then((response) => {
        if (response?.success) {
          console.log("response", response);
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      })
      .finally(() => {
        navigation("/");
      });
  }, []);

  return <div>AdminVerifyPage</div>;
}
