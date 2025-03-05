import React, { useState } from "react";
import "./RealEstateManagementPage.css";
import img1 from "../../assets/image/buildings.png";
import img2 from "../../assets/image/technical.png";
import img3 from "../../assets/image/markting.png";
import img4 from "../../assets/image/qanwn.png";
import line from "../../assets/image/heading-line-dec.webp";
import img1hover from "../../assets/image/buildings-hover.png";
import img2hover from "../../assets/image/technical-hover.png";
import img3hover from "../../assets/image/markting-hover.png";
import img4hover from "../../assets/image/qanwn-hover.png";

const CardManagementPage = () => {
  const lan = document.querySelector("html").dir;
  const isArabic = lan === "rtl";
  const [hovered, setHovered] = useState(null);

  const translations = {
    ar: {
      heading: "تشمل خدماتنا",
      service1: "إدارة العقارات السكنية والتجارية",
      service2: "الصيانة والتشغيل",
      service3: "تسويق وتأجير العقارات",
      service4: "متابعة الأمور القانونية والمالية",
      desc1:
        "الإشراف على العقارات، تحصيل الإيجارات، متابعة المستأجرين، وإعداد العقود وفق الأنظمة.",
      desc2:
        "توفير خدمات الصيانة والإصلاحات، الإشراف على التنظيف والحراسة، والتعاقد مع مزودي خدمات متميزين.",
      desc3:
        "الترويج للعقارات، البحث عن مستأجرين بأسعار مناسبة، وتقديم استشارات لتحسين القيمة السوقية.",
      desc4:
        "تحصيل الفواتير والمستحقات، تقديم تقارير مالية دورية، ومتابعة النزاعات القانونية بشأن الإيجارات والمخالفات.",
    },
    en: {
      heading: "Our Services",
      service1: "Residential and Commercial Property Management",
      service2: "Maintenance and Operations",
      service3: "Property Marketing and Leasing",
      service4: "Legal and Financial Matters Management",
      desc1:
        "Overseeing properties, collecting rent, monitoring tenants, and preparing contracts according to regulations.",
      desc2:
        "Providing maintenance services, supervising cleaning and security, and contracting with top-tier service providers.",
      desc3:
        "Promoting properties, finding suitable tenants, and offering consulting to improve market value.",
      desc4:
        "Collecting bills and dues, providing periodic financial reports, and handling legal disputes regarding rents and violations.",
    },
  };

  const t = isArabic ? translations.ar : translations.en;

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const images = [img1, img2, img3, img4];
  const hoverImages = [img1hover, img2hover, img3hover, img4hover];

  return (
    <div className="page-main">
      <div>
        <h2>{t.heading}</h2>
        <img src={line} alt="" />
        <p></p>
      </div>

      <div className="monitor-container">
        <div className="monitor-screen">
          <div className="icon-grid">
            {images.map((img, index) => (
              <div
                key={index}
                className="icon-item"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={hovered === index ? hoverImages[index] : img}
                  alt={`Icon ${index + 1}`}
                />
                <h3>
                  {index === 0
                    ? t.service1
                    : index === 1
                    ? t.service2
                    : index === 2
                    ? t.service3
                    : t.service4}
                </h3>
                <p>
                  {index === 0
                    ? t.desc1
                    : index === 1
                    ? t.desc2
                    : index === 2
                    ? t.desc3
                    : t.desc4}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardManagementPage;
