import React from "react";
import { Link } from "react-router-dom"; // استيراد عنصر Link من مكتبة react-router-dom
import instance from "../../data/BaseUrl";

export function BtnLogin({ language }) {
  const isLogin = localStorage.getItem("isLogin");

  const logout = async () => {
    try {
      const response = await instance.post("/logout");
      console.log(response);
      localStorage.removeItem("isLogin");
      localStorage.removeItem("auth_token");
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <>
      {isLogin == 560174 ? (
        <button className="btn1 btn-login" onClick={logout}>
          {" "}
          <i className="fa fa-sign-out"></i>{" "}
          {language === "arabic" ? " خروج" : "Login"}
        </button>
      ) : (
        <Link to="/login" className="btn1 btn-login">
          {" "}
          {/* توجيه المستخدم إلى صفحة تسجيل الدخول عند النقر */}
          <i className="fa fa-sign-out"></i>{" "}
          {language === "arabic" ? " الدخول" : "Login"}
        </Link>
      )}
    </>
  );
}
