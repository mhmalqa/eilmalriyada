import React from "react";
import { Link } from "react-router-dom";
import Back from "../common/Back";
import img from "../images/about.jpg";
import "./about.css";

const About = (props) => {
  const { language, inHome } = props;
  const isArabic = language === "arabic";
  const showBackButton = inHome !== "true";
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <>
      <section id="moreAboutUs" className="about">
        {showBackButton && (
          <Back
            name={isArabic ? "من نحن؟" : "About Us"}
            title={
              isArabic ? "من نحن - ماذا تعرف عنا؟" : "About Us - Who We Are?"
            }
            cover={img}
          />
        )}
        <div className="container flex mtop ">
          <div className="left row">
            <h2>{isArabic ? "من نحن؟" : "Who We Are?"}</h2>
            <p>
              {isArabic
                ? "في بدر محمد الصيوان للتسويق والوساطة العقارية، نعتبر كل عقار يتم تسويقه لنا كأنه من ممتلكاتنا، ونكون دائماً في مكان المالك وفي مكان المستأجر."
                : "At Bader Mohammed Al-Siwan Real Estate Marketing and Brokerage, we consider every property marketed to us as if it were our property, and we are always in the place of the owner and the tenant."}
            </p>
            <p>
              {isArabic
                ? "نعمل في مجال التسويق العقاري للبيع والتأجير في شمال وشرق الرياض وكافة مناطق المملكة العربية السعودية، معتمدين على استراتيجيات مبتكرة لضمان تحقيق أعلى قيمة وجودة خدمة لكل من المالك والمستأجر."
                : "We work in the field of real estate marketing for sale and rent in the north and east of Riyadh and all regions of the Kingdom of Saudi Arabia, relying on innovative strategies to ensure achieving the highest value and quality of service for both the owner and the tenant."}
            </p>
            {/* Insert other rewritten paragraphs here... */}
            {showBackButton && (
              <>
                <p>{isArabic ? "شهاداتنا:" : "Our certificates:"}</p>
                <p>
                  <ul style={{ listStyleType: "disc" }}>
                    <li>
                      {isArabic
                        ? "ماجستير في التسويق الدولي – بريطانيا (@StrathBusiness)"
                        : "Master of International Marketing - UK (@StrathBusiness)"}
                    </li>
                    <li>
                      {isArabic
                        ? " بكالوريوس في المحاسبة والمالية مع مرتبة الشرف – معهد Dundalk للتكنولوجيا، أيرلندا (@DkIT_ie) "
                        : "BA Hons Accounting & Finance – Dundalk Institute of Technology, Ireland (@DkIT_ie)"}
                    </li>
                    <li>
                      {isArabic
                        ? "دبلوم في إدارة الأعمال – جامعة Royal Roads، كندا (@RoyalRoads) "
                        : "Diploma in Business Administration – Royal Roads University, Canada (@RoyalRoads)"}
                    </li>
                    <li>
                      {isArabic
                        ? "ترخيص مسوّق عقاري معتمد من هيئة العقار (رقم الترخيص: 1100012564)"
                        : "Real Estate Broker License Approved by the Real Estate Authority (License No.: 1100012564)"}
                    </li>
                    <li>
                      {isArabic
                        ? "ترخيص منشأة (رقم الترخيص: 1200033656)"
                        : "Facility License (License No.: 1200033656)"}
                    </li>
                  </ul>
                </p>
              </>
            )}
            {!showBackButton && (
              <Link to="/about">
                <button className="btnn" onClick={scrollToTop}>
                  {isArabic ? "المزيد عنا" : "More About Us"}
                </button>
              </Link>
            )}
            <a
              href="https://chat.whatsapp.com/FlY4ex4bbkaJJypxJx9BkW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn8">
                <i class="fa-brands fa-whatsapp"></i>{" "}
                {isArabic ? "انضم الينا على الواتساب" : "Join us on WhatsApp"}
              </button>
            </a>
          </div>
          {!showBackButton && (
            <div className="right row">
              <img
                src={process.env.PUBLIC_URL + "/about us.jpg"}
                alt="About Us"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default About;
