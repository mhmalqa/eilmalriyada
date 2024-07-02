import Recent from "../../home/recent/Recent";
import "./RecentDashbord.css";
import { Link } from "react-router-dom";

export function RecentDashbord(props) {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // التمرير إلى أعلى الصفحة
  };

  return (
    <>
      <section>
        <div className="btn-add-recent">
          <Link
            to="/maindashbord/real-estate/add"
            style={{ color: "#fff" }}
            onClick={scrollToTop}
          >
            <button className="cssbuttons-io-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                ></path>
              </svg>
              <span>اضافة عقار</span>
            </button>
          </Link>
        </div>
        <Recent language={"arabic"} isHome={false} isDash={true} />
      </section>
    </>
  );
}
