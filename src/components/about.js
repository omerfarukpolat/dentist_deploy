import { Navigation } from "./navigation";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {useTranslation} from "react-i18next";

export const About = (props) => {
  const { t } = useTranslation();
  return (
    <div id="about" className={"about-background"}>
      <div className="container">
        <div className="row">
          <div style={{ marginBottom: 10 }} className="col-xs-12 col-md-6">
            {" "}
            <AnimationOnScroll
              style={{overflow: "hidden !important" }}
              animateIn="animate__fadeInDown"
              duration={2}
              animateOnce={true}
            >
              <div style={{ 
                height: "80vh",        // Adjust height to how much you want visible
                overflow: "hidden"     // Hide the overflowing part
              }}>
                <img
                  src="img/team/ekibimiz_biz_kimiz.JPG"
                  className="img-responsive"
                  alt=""
                  style={{ 
                    marginTop: "-5vh" // Move the image up to crop the top part
                  }}
                />
              </div>
            </AnimationOnScroll>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <AnimationOnScroll

                  style={{overflow: "hidden !important" }}
                animateIn="animate__fadeInDown"
                delay={1}
                duration={2}
                animateOnce={true}
              >
                <h2>{props.data ? (t(props.data.hakkimizda)) : "loading..."}</h2>
              </AnimationOnScroll>
              <AnimationOnScroll
                style={{overflow: "hidden !important" }}
                animateIn="animate__fadeInRight"
                delay={2}
                duration={2}
                animateOnce={true}
              >
                <p>{props.data ? (t(props.data.paragraph)) : "loading..."}</p>
              </AnimationOnScroll>
              <AnimationOnScroll
                style={{overflow: "hidden !important" }}
                animateIn="animate__fadeInLeft"
                delay={3}
                duration={2}
                animateOnce={true}
              >
                <h3>{props.data ? (t(props.data.neden_dentics)) : "loading..."}</h3>
              </AnimationOnScroll>
              <AnimationOnScroll
                style={{overflow: "hidden !important"}}
                animateIn="animate__fadeInLeft"
                delay={4}
                duration={2}
                animateOnce={true}
              >
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{t(d)}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {t(d)}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
