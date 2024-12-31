const clientId = import.meta.env.VITE_API_SALESFORCE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_API_SALESFORCE_CLIENT_SECRET;
const userName = import.meta.env.VITE_API_SALESFORCE_USER_NAME;
const userPassword = import.meta.env.VITE_API_SALESFORCE_USER_PASSWORD;

const ApiCalling = async (
  url: string,
  type?: string,
  data?: any = ""
): Promise<any> => {
  const myHeaders = new Headers();
  const token = sessionStorage.getItem("accessToken");

  if (type !== "FILE") {
    myHeaders.append("Content-Type", "application/json");
  }
  if (token) {
    myHeaders.append("token", token);
  }
  myHeaders.append('Authorization', `Bearer ${token}`);

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
  // SessionActiveOrNot(response);
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
interface token {
  access_token: string;
  instance_url: string;
  id: string;
  token_type?: string;
  issued_at?: string;
  signature?: string;
}

async function GetAccessToken(): Promise<token> {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "password");
  urlencoded.append("client_id", clientId);
  urlencoded.append("client_secret", clientSecret);
  urlencoded.append("username", userName);
  urlencoded.append("password", userPassword);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
  };

  try {
    const response = await fetch('/salesforce/services/oauth2/token', requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result:token = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error; // access_tokenRe-throw the error to handle it further up the chain if necessary
  }
}
export default ApiCalling;
export { GetAccessToken }
