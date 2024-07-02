// import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import { homePage } from "../../data/Data";
import React from "react";


// Assuming this JSX section is inside a React component
const HeroSection = ({ language }) => {
  // Find the correct language object
  const languageObject = homePage.find((item) => item.language === language);

  return (
    <section className="hero">
      <div className="container">
        <Heading
          title={languageObject.title}
          subtitle={languageObject.subtitle}
          slogan={languageObject.slogan}
          description={languageObject.description}
          description2={languageObject.description2}
          btn_view={languageObject.btn_view}
        />
      </div>
    </section>
  );
};

export default HeroSection;
