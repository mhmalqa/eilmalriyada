import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
// import ReactGA from "react-ga";
import Home from "../home/Home";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import { ViewProperty } from "../home/recent/view_properties/ViewProperty";
import { Login } from "../auth/login/Login";
import { RecentBage } from "../recentbage/RecentBage";
import { MainDashbord } from "../dashbord/MainDashbord";
import WebDesignService from "../home/web/WebDesignService";
import ResponsiveVideo from "../home/video/ResponsiveVideo";
import RealEstatePhotography from "../home/real-estate-photography/RealEstatePhotography";

// const TRACKING_ID = "G-J3X9Y258WF";
const Pages = () => {
  const defaultLanguage = localStorage.getItem("language") || "arabic";
  const [language, setLanguage] = useState(defaultLanguage);
  document.querySelector("html").dir = language === "arabic" ? "rtl" : "ltr";

  return (
    <Router>
      <PageContent language={language} setLanguage={setLanguage} />
    </Router>
  );
};

const PageContent = ({ language, setLanguage }) => {
  const location = useLocation(); // استخدام useLocation للحصول على المسار الحالي
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLogin") === "560174" ? true : false
  );

  useEffect(() => {
    const storedIsLoggedIn =
      localStorage.getItem("isLogin") === "560174" ? true : false;
    setIsLoggedIn(storedIsLoggedIn);

    if (isLoggedIn !== storedIsLoggedIn) {
      if (storedIsLoggedIn) {
        history.push("/maindashbord");
      } else {
        history.push("/login");
      }
    }
  }, [isLoggedIn, history]);

  useEffect(() => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (location.pathname.includes("/maindashbord") && isLoggedIn) {
      if (header) header.style.display = "none";
      if (footer) footer.style.display = "none";
    } else {
      if (header) header.style.display = "block";
      if (footer) footer.style.display = "block";
    }
    if (location.pathname.includes("/login")) {
      if (footer) footer.style.display = "none";
    }
  }, [location.pathname, isLoggedIn]); // مراقبة تغييرات المسار الحالي

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <Switch>
        <Route exact path="/" render={() => <Home language={language} />} />
        <Route path="/about" render={() => <About language={language} />} />
        <Route
          path="/services"
          render={() => <Services language={language} />}
        />
        <Route
          exact
          path="/real-estate"
          render={() => <RecentBage language={language} />}
        />
        <Route path="/real-estate/view/:id" component={ViewProperty} />
        {/* <Route path="/design" component={WebDesignService} /> */}

        <Route path="/contact" component={Contact} />
        <Route path="/video" component={ResponsiveVideo} />
        <Route
          path="/RealEstatePhotography"
          component={RealEstatePhotography}
        />

        {!isLoggedIn && (
          <Route
            path="/login"
            render={() => (
              <Login language={language} setIsLoggedIn={setIsLoggedIn} />
            )}
          />
        )}

        {isLoggedIn && (
          <Route path="/maindashbord" render={() => <MainDashbord />} />
        )}

        <Route path="/*" render={() => <Home language={language} />} />
      </Switch>
      <Footer language={language} /> {/* يتم عرض Footer بشكل افتراضي */}
    </>
  );
};

export default Pages;
