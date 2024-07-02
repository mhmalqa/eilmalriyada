import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toggleLanguage } from "../../data/toggleLanguage";

export function BtnChoose({ setLanguage }) {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "arabic"
  );

  const handleLanguageToggle = (selectedLanguage) => {
    localStorage.setItem("language", selectedLanguage);
    setSelectedLanguage(selectedLanguage);
    toggleLanguage(selectedLanguage, setLanguage);
  };
  const isLogin = localStorage.getItem("isLogin");

  return (
    <>
      <select
        className="language-menu"
        value={selectedLanguage}
        onChange={(e) => handleLanguageToggle(e.target.value)}
      >
        <option value="arabic">عربي</option>
        <option value="english">English</option>
      </select>
      {isLogin == 560174 ? (
        <Link to="/maindashbord/messages">
          {" "}
          <i class="fa-solid fa-gauge icon-dashbord"></i>
        </Link>
      ) : (
        ""
      )}
    </>
  );
}
