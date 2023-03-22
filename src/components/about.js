import { Navigation } from "./navigation";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const About = (props) => {
  return (
    <div id="about" className={"about-background"}>
      <div className="container">
        <div className="row">
          <div style={{ marginBottom: 10 }} className="col-xs-12 col-md-6">
            {" "}
            <AnimationOnScroll
              animateIn="animate__fadeInDown"
              duration={2}
              animateOnce={true}
            >
              <img
                src="img/team/ekibimiz_biz_kimiz.JPG"
                className="img-responsive"
                alt=""
              />{" "}
            </AnimationOnScroll>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <AnimationOnScroll
                animateIn="animate__fadeInDown"
                delay={1}
                duration={2}
                animateOnce={true}
              >
                <h2>Hakkımızda</h2>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeInRight"
                delay={2}
                duration={2}
                animateOnce={true}
              >
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeInLeft"
                delay={3}
                duration={2}
                animateOnce={true}
              >
                <h3>Neden Dentics?</h3>
              </AnimationOnScroll>
              <AnimationOnScroll
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
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
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
