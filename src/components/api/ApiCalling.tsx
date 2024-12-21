const apiPrefix = import.meta.env.VITE_API_PREFIX;
const ApiCalling = async (
  url: string,
  type: "GET" | "POST" | "FILE",
  data: any = ""
): Promise<any> => {

  url = `${apiPrefix}${url}`;
  const myHeaders = new Headers();
  const token = sessionStorage.getItem("accessToken");

  if (type !== "FILE") {
    myHeaders.append("Content-Type", "application/json");
  }
  if (token) {
    myHeaders.append("token", token);
  }

  const requestOptions: RequestInit = {
    method: type === "FILE" ? "POST" : type,
    headers: myHeaders,
  };

  if (type === "POST") {
    requestOptions.body = JSON.stringify(data);
  } else if (type === "FILE") {
    requestOptions.body = data;
  }

  const response = await fetch(url, requestOptions);
  SessionActiveOrNot(response);
  return response.json();
};

const SessionActiveOrNot = (response: Response): void | { error: string } => {
  if (response.status === 401) {
    // Clear session storage
    sessionStorage.clear();
    // Redirect to the root route
    window.location.href = "/";
    // Return an error message (optional)
    return { error: "Session expired. Please log in again." };
  }
};

export default ApiCalling;
