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
                ? "بدر محمد الصيوان للتسويق والوساطة العقارية. بدر حاصل على درجة البكالوريوس مع مرتبة الشرف في المحاسبة والمالية من Dundalk Institute of Technology في أيرلندا @DkIT_ie، بالإضافة إلى دبلوم في إدارة الأعمال من جامعة Royal Roads @RoyalRoads في كندا. كما أنه مسوق عقاري معتمد من هيئة العقار برقم ترخيص 1100012564."
                : "Bader Mohammed Al-Siwan for Real Estate Marketing and Brokerage. Bader holds a Bachelor's degree with Honors in Accounting and Finance from Dundalk Institute of Technology in Ireland @DkIT_ie, in addition to a Diploma in Business Administration from Royal Roads University @RoyalRoads in Canada. He is also a certified real estate marketer from the Real Estate Authority with license number 1100012564."}
            </p>
            <p>
              {isArabic
                ? "في بدر محمد الصيوان للتسويق والوساطة العقارية، نحن متخصصون في التسويق والوساطة العقارية، مع تركيز خاص على تأجير العقارات في مناطق شرق وشمال الرياض. نقدم خدمات تسويقية مهنية تستهدف تأجير العقارات بشكل سريع وفعّال."
                : "At Bader Mohammed Al-Siwan Real Estate Marketing and Brokerage, we specialize in real estate marketing and brokerage, with a special focus on leasing properties in the eastern and northern regions of Riyadh. We provide professional marketing services that target leasing properties quickly and efficiently."}
            </p>
            {/* Insert other rewritten paragraphs here... */}
            {showBackButton && (
              <>
                <p>
                  {isArabic
                    ? "نستخدم جميع المنصات العقارية لنشر العقارات المتاحة للإيجار، بما في ذلك إدراجها على قنوات اليوتيوب الخاصة بنا، بالإضافة إلى تنفيذ حملات إعلانية مبتكرة تضمن تأجير العقارات بسرعة وكفاءة، مع الالتزام بأعلى معايير الاحترافية في خدمة العملاء."
                    : "Our goal is to help property owners market their properties in a distinctive and professional manner, to ensure excellent rental returns and achieve the highest possible value for their properties."}
                </p>
                <p>
                  {isArabic
                    ? "هدفنا هو مساعدة ملاك العقارات في تسويق عقاراتهم بشكل مميز ومهني، لضمان تحقيق عائدات إيجارية ممتازة وتحقيق أعلى قيمة ممكنة لممتلكاتهم."
                    : "We, at Riyada Consultancy Office for Administrative and Financial Consulting and Badr Mohammed Al-Saywan Real Estate Marketing, provide integrated services in the fields of administrative and financial development, in addition to specialized real estate marketing services. We strive diligently to achieve our clients goals by offering professional consultations and innovative solutions that meet their needs and contribute to the success of their real estate projects."}
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
