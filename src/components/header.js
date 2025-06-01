import { AnimationOnScroll } from "react-animation-on-scroll";
import useWindowDimensions from "../hooks/useWindowDimensions";
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export const Header = (props) => {
  const { t } = useTranslation();
  const { height, width } = useWindowDimensions();
  return (
    <header id="header">
      <AnimationOnScroll
        style={{overflow: "hidden !important" }}
        animateIn="animate__fadeIn"
        duration={1}
        animateOnce={true}
      >
        <div className={width > 400 ? "intro" : "intro-sm"}>
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className={"col-md-8 col-md-offset-2 " + (width > 400 ? "intro-text" : "intro-text-sm")}>
                  {/* <h1 style={{ fontFamily: "MontserratBold" }}> */}
                  <h1  
                      style={{
                        fontFamily: "MontserratBold",
                        fontSize: width > 400 ? "5vw" : "4.5vw", // smaller than 7vw / 6vw
                        marginTop: "15vh",
                      }}
                  >
                    {props.data ? t(props.data.title) : "Loading"}
                    <span></span>
                  </h1>
                  <p style={{ fontFamily: "Montserrat" }}>
                    {props.data ? props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href={"#about"}
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    {props.data ? (t(props.data.daha_fazla)) : "loading..."}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </header>
  );
};
