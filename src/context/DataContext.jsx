import { createContext, useContext, useEffect, useState } from "react";

export const CreateContextData = createContext();

export default function DataContextProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        const jsonData = await res.json();

        if (jsonData) {
          setData(jsonData);
        }
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <CreateContextData.Provider value={{ data }}>
        {children}
      </CreateContextData.Provider>
    </>
  );
}

export function useDataContext() {
  return useContext(CreateContextData);
}
