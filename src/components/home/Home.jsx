import React from "react";
import Awards from "./awards/Awards";
import Sectors from "./featured/Featured";
import Hero from "./hero/Hero";
import Recent from "./recent/Recent";
import About from "../about/About";
import Services from "../services/Services";
import Contact from "../contact/Contact";

const Home = (props) => {
  return (
    <>
      <Hero language={props.language} />
      <Recent language={props.language} isHome={true} />
      <Services language={props.language} inHome="true" />
      <Awards language={props.language} />
      <About language={props.language} inHome="true" />
      <Contact language={props.language} inHome="true" />
      <Sectors language={props.language} />

      {/* <Location language={props.language} /> 
      <Team language={props.language} />  */}
    </>
  );
};

export default Home;
