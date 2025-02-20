import React, { useEffect, useState } from "react";
import { useLocation, Link, Route, useHistory } from "react-router-dom";
import "./MainDashbord.css";
import Img from "./pngtree.jpg";
import { CardContact } from "./contact/CardContact";
import { Urls } from "./urls/Url";
import ImageUpload from "./posts/PublishPost";
import PostsPage from "./posts/RemovePost";
import { RecentDashbord } from "./recentDashbord/RecentDashbord";
import { InsertRecent } from "./recentDashbord/dml/InsertRecent";
import { UpdateRecent } from "./recentDashbord/dml/UpdateRecent";
import { AccountSettings } from "./accountsettings/AccountSettings";
import { Register } from "./accountsettings/CreateAccount";
import instance, { baseUrlWithoutApi } from "../data/BaseUrl";

export function MainDashbord() {
  const location = useLocation(); // استخدام useLocation للحصول على المسار الحالي
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [profileImagePreview, setProfileImagePreview] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/me");
        setEmail(response.data.email);
        setName(response.data.name);
        setProfileImagePreview(
          response.data.profile_image
            ? `${baseUrlWithoutApi}${response.data.profile_image}`
            : null
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleLogout = async () => {
    try {
      const response = await instance.post("/logout");
      console.log(response.data.message); // عرض رسالة نجاح الخروج
      // اتخاذ أي إجراءات إضافية بعد تسجيل الخروج
      localStorage.removeItem("auth_token");
      localStorage.removeItem("isLogin");
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0); // التمرير إلى أعلى الصفحة
  };

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]); // مراقبة تغييرات المسار الحالي

  function getPageTitle(path) {
    switch (path) {
      case "/maindashbord":
        return "الرئيسية";
      case "/maindashbord/messages":
        return "المراسلات";
      case "/maindashbord/links":
        return "الروابط";
      case "/maindashbord/posts/publichpost":
        return "نشر منشور";
      case "/maindashbord/posts":
        return "المنشورات";
      case "/maindashbord/AccountSettings/update":
        return "الاعدادات";
      case "/maindashbord/real-estate":
        return "العقارات";
      case "/maindashbord/real-estate/add":
        return "اضافة عقار";
      case "/maindashbord/real-estate/update":
        return "تعديل عقار";
      default:
        return "لوحة التحكم";
    }
  }

  return (
    <section className="dashbord">
      <div className="info-account">
        <div className="image-name">
          <img src={profileImagePreview || Img} alt="profile" loading="lazy" />
          <p>{name}</p>
        </div>
        <div>
          <button onClick={handleLogout}>تسجيل الخروج</button>
        </div>
      </div>
      <div className="dashbord-con">
        <div className="dashbord-title">
          <div className="dashbord-header">
            <h1>{getPageTitle(currentPath)}</h1>
          </div>
          <main className="content">
            <Route exact path="/maindashbord/posts" component={PostsPage} />
            <Route
              exact
              path="/maindashbord/posts/publichpost"
              component={ImageUpload}
            />
            <Route exact path="/maindashbord/links" component={Urls} />
            <Route
              exact
              path="/maindashbord/messages"
              component={CardContact}
            />
            <Route
              exact
              path="/maindashbord/real-estate"
              component={RecentDashbord}
            />
            <Route
              exact
              path="/maindashbord/real-estate/add"
              component={InsertRecent}
            />
            <Route
              exact
              path="/maindashbord/real-estate/update"
              component={UpdateRecent}
            />
            <Route
              exact
              path="/maindashbord/AccountSettings/update"
              component={AccountSettings}
            />
            <Route
              exact
              path="/maindashbord/AccountSettings/register"
              render={() => <Register language={"arabic"} />}
            />
          </main>
        </div>
        <nav className="dashbord-sidebar">
          <ul>
            <Link to="/home" style={{ color: "#fff" }} onClick={scrollToTop}>
              <li>الرئيسية</li>
            </Link>
            <Link
              to="/maindashbord/messages"
              style={{ color: "#fff" }}
              onClick={scrollToTop}
            >
              <li>المراسلات</li>
            </Link>
            <Link
              to="/maindashbord/links"
              style={{ color: "#fff" }}
              onClick={scrollToTop}
            >
              <li>الروابط</li>
            </Link>
            <Link
              to="/maindashbord/posts/publichpost"
              style={{ color: "#fff" }}
              onClick={scrollToTop}
            >
              <li>نشر منشور</li>
            </Link>
            <Link
              to="/maindashbord/posts"
              style={{ color: "#fff" }}
              onClick={scrollToTop}
            >
              <li>المنشورات</li>
            </Link>
            <Link
              to="/maindashbord/real-estate"
              style={{ color: "#fff" }}
              onClick={scrollToTop}
            >
              <li>العقارات</li>
            </Link>
            <Link
              to="/maindashbord/AccountSettings/update"
              style={{ color: "#fff" }}
              onClick={scrollToTop}
            >
              <li>خيارات</li>
            </Link>
            <Link
              to="/maindashbord/AccountSettings/register"
              style={{ color: "#fff" }}
              onClick={scrollToTop}
            >
              <li>انشاء حساب</li>
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
}
