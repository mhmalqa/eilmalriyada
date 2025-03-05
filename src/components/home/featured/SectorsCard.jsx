import React from "react";
import { sectors } from "../../data/StaticData";

const SectorsCard = ({ language }) => {
  return (
    <>
      <div className="content grid5 mtop">
        {sectors.map((item, index) => (
          <div className="box" key={index}>
            <img src={item.cover} alt="" loading="lazy" />
            <h4>{language === "arabic" ? item.name : item.name_en}</h4>
            <label>{language === "arabic" ? item.total : item.total_en}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectorsCard;
