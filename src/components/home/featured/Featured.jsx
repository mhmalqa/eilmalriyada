import React from "react";
import Heading from "../../common/Heading";
import "./Featured.css";
import SectorsCard from "./SectorsCard";

const Sectors = ({ language }) => {
  // تحديد كلمة العنوان بناءً على اللغة المحددة
  const title = language === "arabic" ? "القطاعات" : "Sectors";

  return (
    <>
      <section className="featured background">
        <div className="container">
          {/* استخدام العنوان المحدد بناءً على اللغة */}
          <Heading title={title} />
          <SectorsCard language={language} />
        </div>
      </section>
    </>
  );
};

export default Sectors;
