import "./urls.css";
import React, { useState, useEffect } from "react";
import instance from "../../data/BaseUrl";

export function Urls() {
  const [data, setData] = useState({
    whatsapp: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    feasibility: "",
    consulting: "",
    solutions: "",
    restructuring: "",
    marketing: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/urls");
        const retrievedData = response.data;

        const newData = {};
        retrievedData.forEach((item) => {
          newData[item.account_name] = item.account_url;
        });
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const sendMessage = async (name, url) => {
    try {
      const payload = {
        account_name: name,
        account_url: url,
        account_type:
          name.startsWith("whatsapp") ||
          name.startsWith("instagram") ||
          name.startsWith("twitter") ||
          name.startsWith("linkedin")
            ? "social_media"
            : "financial_services",
      };

      const response = await instance.post(`/urls/${name}`, payload);

      if (response.status === 200) {
      } else {
        console.log("Error With Get Data");
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.error("Validation error:", error.response.data);
        alert(
          "خطأ في التحقق من البيانات: " +
            JSON.stringify(error.response.data.errors)
        );
      } else {
        console.error("Error:", error);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="urls padding">
      <div className="container">
        <div className="social-media-links">
          <fieldset>
            <h2>روابط السوشل ميديا</h2>
            <label htmlFor="whatsapp">رابط الواتساب</label>
            <input
              type="text"
              id="whatsapp"
              name="whatsapp"
              value={data.whatsapp}
              onChange={handleInputChange}
              onBlur={() => sendMessage("whatsapp", data.whatsapp)}
              className="whatsapp"
            />
            <label htmlFor="instagram">رابط الانستاغرام</label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={data.instagram}
              onChange={handleInputChange}
              onBlur={() => sendMessage("instagram", data.instagram)}
              className="instagram"
            />
            <label htmlFor="twitter">رابط التويتر</label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              value={data.twitter}
              onChange={handleInputChange}
              onBlur={() => sendMessage("twitter", data.twitter)}
              className="twitter"
            />
            <label htmlFor="linkedin">رابط التيك توك</label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={data.linkedin}
              onChange={handleInputChange}
              onBlur={() => sendMessage("linkedin", data.linkedin)}
              className="linkedin"
            />
          </fieldset>
        </div>
        <div className="service-link">
          <fieldset>
            <h2>الخدمات المالية والادارية</h2>
            <label htmlFor="feasibility">رابط دراسة الجدوى الاقتصادية</label>
            <input
              type="text"
              id="feasibility"
              name="feasibility"
              value={data.feasibility}
              onChange={handleInputChange}
              onBlur={() => sendMessage("feasibility", data.feasibility)}
            />
            <label htmlFor="consulting">
              رابط استشارات اقتصادية و مالية و ادارية
            </label>
            <input
              type="text"
              id="consulting"
              name="consulting"
              value={data.consulting}
              onChange={handleInputChange}
              onBlur={() => sendMessage("consulting", data.consulting)}
            />
            <label htmlFor="solutions">حلول مالية متطورة</label>
            <input
              type="text"
              id="solutions"
              name="solutions"
              value={data.solutions}
              onChange={handleInputChange}
              onBlur={() => sendMessage("solutions", data.solutions)}
            />
            <label htmlFor="restructuring">
              خدمة إعادة الهيكلة الإدارية للشركات
            </label>
            <input
              type="text"
              id="restructuring"
              name="restructuring"
              value={data.restructuring}
              onChange={handleInputChange}
              onBlur={() => sendMessage("restructuring", data.restructuring)}
            />
            <label htmlFor="marketing">خدمات التسويق والتسويق الرقمي</label>
            <input
              type="text"
              id="marketing"
              name="marketing"
              value={data.marketing}
              onChange={handleInputChange}
              onBlur={() => sendMessage("marketing", data.marketing)}
            />
          </fieldset>
        </div>
      </div>
    </section>
  );
}
