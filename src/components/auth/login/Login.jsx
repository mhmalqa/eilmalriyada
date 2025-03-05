import { useState } from "react";
import "./Login.css";
import instance from "../../data/BaseUrl";
import CryptoJS from "crypto-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login({ language, setIsLoggedIn }) {
  const isArabic = language === "arabic";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const secretKey = "560";
  function encrypt(text) {
    return CryptoJS.AES.encrypt(text, secretKey).toString();
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/login", {
        email,
        password,
      });
      // console.log("Login successful:", response.data);
      const encryptedToken = encrypt(response.data.access_token);
      localStorage.setItem("auth_token", encryptedToken);
      localStorage.setItem("isLogin", 560174);
      window.location.href = "/maindashbord/messages";
    } catch (error) {
      // console.error("Error logging in:", error);
      toast.error("خطأ بالبيانات");
    }
  };

  return (
    <>
      <div className="container-login">
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleLogin} className="sign-in-form">
              <h2 className="title">{isArabic ? "تسجيل الدخول" : "Sign in"}</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isArabic ? "الايميل" : "E-mail"}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={isArabic ? "كلمة المرور" : "Password"}
                />
              </div>
              <input
                type="submit"
                value={isArabic ? "تسجيل الدخول" : "Login"}
                className="btn solid"
              />
              <p className="social-text">
                {isArabic
                  ? "تابعنا على مواقع التواصل الاجتماعي"
                  : "Follow us on social media"}
              </p>
              <div className="social-media">
                <a
                  href="https://www.instagram.com/eilmalriyada.re?igsh=b28zNmtuYzVmZnR0"
                  className="social-icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://ae.linkedin.com/posts/bader-alsiwan-728471151_%D8%A8%D8%AF%D8%B1-%D8%A7%D9%84%D8%B5%D9%8A%D9%88%D8%A7%D9%86-wwweilmalriyadacom-linkedin-activity-7229848296976994304-MloA"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
