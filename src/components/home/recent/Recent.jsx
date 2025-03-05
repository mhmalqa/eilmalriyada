import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";
import { list } from "../../data/Data";
import { Link } from "react-router-dom";

const Recent = ({ language, isHome, isDash }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // التمرير إلى أعلى الصفحة
  };

  return (
    <>
      <section className="recent padding">
        {/* {isDash || !isHome ? "" : <Post language={language} />} */}
        <div className="container">
          <Heading title={language === "arabic" ? "العقارات" : "Real Estate"} />
          <p style={{ textAlign: "center" }}>
            {language === "arabic" ? "جميع العقارات" : "All Properties"} : (
            {list.length})
          </p>

          <RecentCard language={language} isHome={isHome} isdash={isDash} />
          <div className="dv-btn">
            <Link to="/real-estate" className="more">
              <button
                class="contactButton"
                onClick={scrollToTop}
                style={isHome && !isDash ? null : { display: "none" }}
              >
                {language === "arabic" ? "جميع العقارات" : "All Properties"}
                <div class="iconButton">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;
