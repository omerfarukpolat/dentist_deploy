import { AnimationOnScroll } from "react-animation-on-scroll";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const Header = (props) => {
  const { height, width } = useWindowDimensions();
  return (
    <header id="header">
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        duration={1}
        animateOnce={true}
      >
        <div className={width > 400 ? "intro" : "intro-sm"}>
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className={"col-md-8 col-md-offset-2 " + (width > 400 ? "intro-text" : "intro-text-sm")}>
                  <h1 style={{ fontFamily: "MontserratBold" }}>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p style={{ fontFamily: "Montserrat" }}>
                    {props.data ? props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href={"#about"}
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Daha Fazla
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
