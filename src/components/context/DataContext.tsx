import React, { createContext, useEffect, useState, ReactNode, useContext } from "react";

// Define the shape of your context's data
export interface Data {
  clientSecret: string | null;
  paymentData: any | null; // Replace 'PaymentDataType' with the actual type
  accessToken: string | null;
  userData: any | null;
}

// Define the context type
export interface DataContextType {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}

// Create the context
export const DataContext = createContext<DataContextType | undefined>(undefined);

// Define props for the provider
interface DataProviderProps {
  children: ReactNode;
}

const defaultData: Data = {
  clientSecret: null,
  paymentData: null,
  accessToken: null,
  userData: null,
};
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<Data>(defaultData);

  useEffect(() => {
    const clientSecretData = sessionStorage.getItem("clientSecret");
    const accessToken = sessionStorage.getItem("accessToken");
    const user = sessionStorage.getItem("user");

    if (clientSecretData) {
      setData((v) => ({ ...v, clientSecret: clientSecretData }));
    }
    if (accessToken) {
      setData((v) => ({ ...v, accessToken }));
    }
    if (user) {
      setData((v) => ({ ...v, userData: JSON.parse(user) }));
    }
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const UseDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};