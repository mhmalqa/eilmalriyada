import React from "react";
import "./RealEstateManagementPage.css";
import img from "../../assets/image/why.png";

const WhyUsPage = () => {
  const lan = document.querySelector("html").dir;
  const isArabic = lan === "rtl";

  const translations = {
    ar: {
      title: "لماذا نحن؟",
      subtitle: "إدارة عقارية متخصصة لضمان راحتك وزيادة عوائدك",
      description:
        "فريق متخصص في إدارة الأملاك بشمال وشرق الرياض، بخبرة واسعة في السوق العقاري السعودي. نقدم حلولًا متكاملة تضمن راحة الملاك وزيادة العوائد، مع تقارير دقيقة وشفافة تتيح لك متابعة استثمارك بسهولة.",
    },
    en: {
      title: "Why Us?",
      subtitle:
        "Specialized Property Management to Ensure Your Comfort and Maximize Your Returns",
      description:
        "A specialized team in property management in North and East Riyadh, with extensive experience in the Saudi real estate market. We provide integrated solutions to ensure owners' comfort and maximize returns, with accurate and transparent reports that allow you to easily track your investment.",
    },
  };

  const t = isArabic ? translations.ar : translations.en;

  return (
    <>
      <div className="why-page">
        <div className="page-why">
          <div className="row">
            <div className="se-text">
              <h1>{t.title}</h1>
              <h2>{t.subtitle}</h2>
              <p>{t.description}</p>
              <div></div>
            </div>
            <div se-image>
              <img
                className="image-dash"
                src={img}
                alt="RealEstateManagementPage"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUsPage;
