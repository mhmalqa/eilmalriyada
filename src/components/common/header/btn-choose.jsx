import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toggleLanguage } from "../../data/toggleLanguage";

export function BtnChoose({ setLanguage }) {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "arabic"
  );

  const handleLanguageToggle = () => {
    const newLanguage = selectedLanguage === "arabic" ? "english" : "arabic";
    setSelectedLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    toggleLanguage(newLanguage, setLanguage);
  };

  const isLogin = localStorage.getItem("isLogin");

  return (
    <>
      <button className="btnLanguage" onClick={handleLanguageToggle}>
        {selectedLanguage === "arabic" ? "En" : "Ar"}
      </button>

      {isLogin === "560174" ? (
        <Link to="/maindashbord/messages">
          <i className="fa-solid fa-gauge icon-dashbord"></i>
        </Link>
      ) : null}
    </>
  );
}
