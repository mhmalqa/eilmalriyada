import React from "react";
import Awards from "./awards/Awards";
import Hero from "./hero/Hero";
import Recent from "./recent/Recent";
import About from "../about/About";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import { Helmet } from "react-helmet-async";
import Post from "./post/Post";

const Home = (props) => {
  const dir = document.querySelector("html").getAttribute("dir");

  return (
    <>
      <Helmet>
        <title>
          {dir === "rtl"
            ? "علم الريادة - بإدارة بدر الصيوان | متخصص في التسويق العقاري والتأجير"
            : "Eilm Alriyada - Managed by Badr Al-Saiwan | Specializing in Real Estate Marketing and Leasing"}
        </title>
      </Helmet>
      {/* <WebDesignService /> */}
      <Hero language={props.language} />
      <Post language={props.language} />
      <Recent language={props.language} isHome={true} />
      <Services language={props.language} inHome="true" />
      <Awards language={props.language} />
      <About language={props.language} inHome="true" />
      <Contact inHome="true" />
      {/* <Sectors language={props.language} />
       <Location language={props.language} /> 
      <Team language={props.language} /> */}
    </>
  );
};

export default Home;
