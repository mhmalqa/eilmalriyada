import { createContext, useState, useEffect, useContext } from "react";
import instance from "../data/BaseUrl"; // تأكد من المسار الصحيح لـ instance

// إنشاء الـ Context
const SocialMediaContext = createContext();

// المزود (Provider) الذي سيحتوي على البيانات ويوفرها للمكونات الأخرى
export function SocialMediaProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await instance.get("/urls");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <SocialMediaContext.Provider value={{ data, loading, error }}>
      {children}
    </SocialMediaContext.Provider>
  );
}

// هوك مخصص لتسهيل الوصول إلى البيانات من الـ Context
export function useSocialMedia() {
  return useContext(SocialMediaContext);
}
