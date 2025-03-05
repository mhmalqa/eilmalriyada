import React from "react";
import Heading from "../../common/Heading";
import { awards } from "../../data/StaticData";
import "./awards.css";

const Awards = ({ language }) => {
  const currentLanguageAwards = awards[language];
  const getHeadingText = () => {
    if (language === "english") {
      return {
        title:
          "We Provide Professional Solutions and Services for Companies in Various Fields.",
        subtitle: "About Elim Riyada",
      };
    } else if (language === "arabic") {
      return {
        title: "نقدم حلولًا وخدمات احترافية للشركات في مجالات متعددة.",
        subtitle: "نبذه عن علم الريادة",
      };
    }
  };
  const { title, subtitle } = getHeadingText();

  return (
    <>
      <section className="awards padding">
        <div className="container">
          <Heading title={title} subtitle={subtitle} />

          <div className="content grid4 mtop">
            {currentLanguageAwards.map((val, index) => (
              <div className="box" key={index}>
                <div className="icon">
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
