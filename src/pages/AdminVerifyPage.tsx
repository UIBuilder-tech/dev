import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const BASE_URL = import.meta.env.VITE_RETURN_BACKEND_API;

export default function AdminVerifyPage() {
  const { contactId, status } = useParams();
  const navigation = useNavigate();
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
