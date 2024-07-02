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
        <div className="container flex mtop">
          <div className="left row">
            <h2>{isArabic ? "من نحن؟" : "Who We Are?"}</h2>
            <p>
              {isArabic
                ? "نحن 'مكتب علم الريادة للاستشارات الإدارية والمالية'، أسسه بدر محمد الصيوان. بدر حاصل على درجة البكالوريوس في محاسبة ومالية مع مرتبة الشرف من Dundalk Institute of Technology في أيرلندا، وعلى دبلوم في إدارة الأعمال من Royal Roads University في فيكتوريا، كندا. يمتلك خبرة غنية في مجال الاستشارات المالية والإدارية، حيث عمل في عدة مكاتب استشارية بارزة، مما أهله لتطوير استراتيجيات فعالة لتحسين الأداء المالي والإداري للشركات."
                : "We are 'Elm Al Riyada Management and Financial Consulting Firm,' founded by Bader Mohammed Al-Saiwan. Bader holds an honors bachelor's degree in Accounting and Finance from Dundalk Institute of Technology in Ireland, and a diploma in Business Administration from Royal Roads University in Victoria, Canada. He has extensive experience in the field of financial and management consulting, having worked at several prominent consulting firms. This has enabled him to develop effective strategies to improve the financial and managerial performance of companies."}
            </p>
            <p>
              {isArabic
                ? "مكتبنا يقدم خدمات متكاملة وعالية الجودة في مجالات الاستشارات الإدارية والمالية للقطاعين العام والخاص، ونسعى إلى الوصول لموقع تنافسي كأحد المكاتب الاستشارية الرائدة التي تسعى لتحقيق الرؤية الثاقبة 2030 في المملكة العربية السعودية."
                : "Our office provides integrated and high-quality services in the fields of administrative and financial consulting for both the public and private sectors. We aim to achieve a competitive position as one of the leading consulting firms that seeks to achieve Vision 2030 in the Kingdom of Saudi Arabia."}
            </p>
            {/* Insert other rewritten paragraphs here... */}
            {showBackButton && (
              <>
                <p>
                  {isArabic
                    ? "مهمتنا تتمثل في تقديم خدمات مهنية دعمتها المعرفة، وتوفير المعلومات والاستشارات المتخصصة حول موضوعات التنمية الإدارية والمالية ذات الأهمية للعملاء، وذلك بتبني استراتيجية تحديد وإدراك احتياجات العملاء وتلبية تلك الاحتياجات وفق أعلى المستويات المهنية."
                    : "Our mission is to provide professional services supported by knowledge, and to offer specialized information and consultations on administrative and financial development issues that are important to our clients. This is achieved by adopting a strategy to identify and understand the needs of our clients and to meet those needs according to the highest professional standards."}
                </p>
                <p>
                  {isArabic
                    ? "نحن في مكتب علم الريادة للاستشارات الادارية والمالية وبدر محمد الصيوان للتسويق العقاري نوفر خدمات متكاملة في مجالات التنمية الإدارية والمالية، بالإضافة إلى خدمات التسويق العقاري المتخصصة، حيث نسعى جاهدين لتحقيق أهداف عملائنا من خلال تقديم الاستشارات المهنية والحلول الابتكارية التي تلبي احتياجاتهم وتساهم في نجاح مشاريعهم العقارية."
                    : "We, at Riyada Consultancy Office for Administrative and Financial Consulting and Badr Mohammed Al-Saywan Real Estate Marketing, provide integrated services in the fields of administrative and financial development, in addition to specialized real estate marketing services. We strive diligently to achieve our clients goals by offering professional consultations and innovative solutions that meet their needs and contribute to the success of their real estate projects."}
                </p>
                <p>
                  {isArabic
                    ? "مهمتنا في مجال التسويق العقاري هي تقديم الدعم والمساعدة للعملاء في اتخاذ القرارات الصائبة في مجال الاستثمار العقاري، وتحقيق أقصى قيمة مضافة لممتلكاتهم العقارية، وذلك من خلال التزامنا بأعلى معايير الاحترافية والنزاهة، وتقديم حلول مبتكرة ومتطورة تلبي تطلعات العملاء وتسهم في نجاح مشاريعهم وتحقيق رؤاهم في مجال العقارات."
                    : "Our mission in the field of real estate marketing is to provide support and assistance to clients in making informed decisions in real estate investment, and to achieve maximum added value for their real estate assets. This is accomplished through our commitment to the highest standards of professionalism and integrity, and by offering innovative and advanced solutions that meet clients' aspirations and contribute to the success of their projects and the realization of their visions in the real estate sector."}
                </p>
                <p>
                  {isArabic
                    ? "ويتميز مكتب علم الريادة بالقدرة على التجاوب مع التطورات العالمية المتعلقة بعولمة الاقتصاديات وانسياب المنتجات والخدمات والتقنية عبر الحدود، وذلك بفضل تبادل الخبرات والأفكار مع المؤسسات الإقليمية والدولية ذات الاهتمام المشترك، مما يعزز من قدرات المكتب الاستشاري على تقديم خدمات أفضل لمسيرة التنمية الاقتصادية."
                    : "Riyada Consultancy Office excels in its ability to respond to global developments related to the globalization of economies and the flow of products, services, and technology across borders. This is achieved through the exchange of experiences and ideas with regional and international institutions of mutual interest, enhancing the consulting office's capabilities to provide better services for economic development."}
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
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default About;
