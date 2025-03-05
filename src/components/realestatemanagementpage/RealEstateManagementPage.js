import React from "react";
import "./RealEstateManagementPage.css";
import img from "../../assets/image/image_mangment.png";
import CardManagementPage from "./CardManagement";
import WhyUsPage from "./WhyUs";
import Contact from "../contact/Contact";

const RealEstateManagementPage = () => {
  const lan = document.querySelector("html").dir;
  const isArabic = lan === "rtl";

  // كائن الترجمة
 const translations = {
   ar: {
     title: "إدارة الأملاك بتميز في شمال وشرق الرياض",
     subtitle:
       "بأعلى مستوى من الاحترافية والعناية، مع التركيز على زيادة العوائد وتلبية احتياجاتك بكفاءة.",
     description:
       "نُقدّم خدمات إدارة الأملاك الشاملة في شمال وشرق الرياض مع الحرص على توفير أعلى معايير الاحترافية لضمان راحة الملاك وتعظيم العوائد الاستثمارية.",
     btnAdd: "ادرج عقارك معنا",
     btnContact: "تواصل معنا",
   },
   en: {
     title: "Property Management with Excellence in North and East Riyadh",
     subtitle:
       "With the highest level of professionalism and care, focusing on increasing returns and efficiently meeting your needs.",
     description:
       "We provide comprehensive property management services in North and East Riyadh, ensuring the highest standards of professionalism to guarantee owners' comfort and maximize investment returns.",
     btnAdd: "List Your Property",
     btnContact: "Contact Us",
   },
 };


  const t = isArabic ? translations.ar : translations.en;

  return (
    <>
      <div className="real-estate-management-page">
        <div className="page-header">
          <div className="row">
            <div className="se-text row">
              <h1>{t.title}</h1>
              <h2>{t.subtitle}</h2>
              <p>{t.description}</p>
              <div>
                <button
                  className="get-program-button btn-add-rcent"
                  onClick={() =>
                    window.open("https://forms.gle/NPmU3n9v4Y3uqh5T7", "_blank")
                  }
                >
                  {t.btnAdd}
                </button>
                <button
                  className="get-program-button btn-whatsapp"
                  onClick={() =>
                    window.open("https://wa.me/966508604391", "_blank")
                  }
                >
                  {t.btnContact} <i className="fab fa-whatsapp"></i>
                </button>
              </div>
            </div>
            <div className="se-image">
              <img
                className="image-dash"
                src={img}
                alt="RealEstateManagementPage"
              />
            </div>
          </div>
        </div>
      </div>
      <CardManagementPage />
      <WhyUsPage />
      <Contact inHome="true" />
    </>
  );
};

export default RealEstateManagementPage;
