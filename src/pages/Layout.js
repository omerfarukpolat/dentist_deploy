import { Outlet, Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";


const Layout = (props) => {
  const { t } = useTranslation();

  const checkLocation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav id="menu" className="navbar navbar-default navbar-expand-sm navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>

            <Link to={"/"} className="navbar-brand page-scroll">
              <img
                style={{ marginTop: "-1.5rem", width: "15rem", height: "5rem" }}
                src="../img/logo3.png"
                onClick={checkLocation}
                alt={""}
              />
            </Link>
          </div>
          <div
            className="navbar-expand-sm navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  href="#about"
                  onClick={() =>
                    window.location.pathname === "/"
                      ? null
                      : (window.location.pathname = "/")
                  }
                  className="page-scroll"
                >
                  {props.data ? (t(props.data.biz_kimiz)) : "loading..."}
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={() =>
                    window.location.pathname === "/"
                      ? null
                      : (window.location.pathname = "/")
                  }
                  className="page-scroll"
                >
                  {props.data ? (t(props.data.ekibimiz)) : "loading..."}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() =>
                    window.location.pathname === "/"
                      ? null
                      : (window.location.pathname = "/")
                  }
                  className="page-scroll"
                >
                  {props.data ? (t(props.data.tedaviler)) : "loading..."}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() =>
                    window.location.pathname === "/"
                      ? null
                      : (window.location.pathname = "/")
                  }
                  className="page-scroll"
                >
                  {props.data ? (t(props.data.iletisim)) : "loading..."}
                </a>
              </li>
              <li>

                  <LanguageSwitcher />

              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
