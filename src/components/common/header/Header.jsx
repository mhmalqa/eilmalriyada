import React, { useState, useEffect } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link, useLocation } from "react-router-dom";
import { BtnChoose } from "./btn-choose";
import { BtnLogin } from "./btn-login";

const Header = ({ language, setLanguage }) => {
  const [navList, setNavList] = useState(false);
  const [loading, setLoading] = useState(false); // حالة التحميل
  const location = useLocation(); // استخدام useLocation من react-router-dom

  useEffect(() => {
    // تشغيل حالة التحميل عند تحميل الصفحة الأولى
    handleLoading();
  }, []);

  useEffect(() => {
    // تشغيل حالة التحميل عند تغيير المسار (الروابط)
    handleLoading();
  }, [location.pathname]); // استخدام location.pathname لتحديد المسار الحالي

  const scrollToTop = () => {
    window.scrollTo(0, 0); // التمرير إلى أعلى الصفحة
  };

  // دالة لتشغيل حالة التحميل
  const handleLoading = () => {
    setLoading(true);
    // يمكنك استخدام setTimeout لتحديد مدة زمنية لعرض علامة التحميل
    setTimeout(() => {
      setLoading(false);
    }, 1000); // هنا 1000 تمثل 1 ثانية
  };

  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo-2030.png" alt="logo" />
          </Link>
        </div>

        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {nav.map((item, index) => (
              <li
                onClick={() => (navList ? setNavList(!navList) : null)}
                key={index}
              >
                <Link
                  to={item.path}
                  onClick={() => {
                    scrollToTop();
                  }}
                >
                  {language === "arabic" ? item.text_ar : item.text_en}
                </Link>
              </li>
            ))}

            {navList && (
              <li>
                <BtnLogin language={language} onClick={scrollToTop} />
                <BtnChoose language={language} setLanguage={setLanguage} />
              </li>
            )}
          </ul>
        </div>
        <div className="button flex">
          <BtnLogin language={language} />
          <BtnChoose language={language} setLanguage={setLanguage} />

          {/* <img
          className="icon-dashbord"
          src={`${homepage}/images/5432747.png`}
          alt="dashbord"
          srcset=""
        /> */}
        </div>

        <div className="toggle">
          <button onClick={() => setNavList(!navList)}>
            {navList ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </div>
      </div>

      {/* عرض علامة التحميل إذا كانت حالة التحميل true */}
      {loading && (
        <div className="loader">
          <img src="/favicon.png" alt="" srcset="" />
          <img className="circle" src="/lode.png" alt="" srcset="" />
        </div>
      )}
    </header>
  );
};

export default Header;
