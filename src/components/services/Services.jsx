import React from "react";
import img from "../images/services.jpeg";
import Back from "../common/Back";
import CardServices from "./CardServices";
import { services } from "../data/StaticData";
import Heading from "../common/Heading";
import "./CardServices.module.css";

const Services = ({ language, inHome }) => {
  const title =
    language === "arabic"
      ? "مجموعة خدماتنا المتكاملة"
      : "Our comprehensive range of services";

  const subtitle = language === "arabic" ? "الخدمات" : "Services";

  return (
    <>
      {inHome === "true" ? (
        ""
      ) : (
        <Back title={title} name={subtitle} cover={img} />
      )}
      <section className="services background">
        <Heading subtitle={subtitle} />
        <div className="container grid3">
          {services.map((item, index) => (
            <>
              <CardServices
                language={language}
                name={language === "arabic" ? item.name : item.name_en}
                frontImage={item.cover}
                desc_f={language === "arabic" ? item.desc_f : item.desc_f_en}
                desc_b={language === "arabic" ? item.desc_b : item.desc_b_en}
                // url={data[index + 4].account_url}
              />
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
