import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {useTranslation} from "react-i18next";

export const Team = (props) => {
  const { t } = useTranslation();
  return (
    <div id="team" className="text-center team-background">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <AnimationOnScroll
            style={{overflow: "hidden !important" }}
            animateIn="animate__slideInDown"
            duration={2}
            animateOnce={true}
          >
            <h2>{props.data ? (t(props.data.hekimlerimiz)) : "loading..."}</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            style={{overflow: "hidden !important" }}
            animateIn="animate__fadeInDown"
            duration={2}
            animateOnce={true}
          >
            <p>
              {props.data ? (t(props.data.hizmetinizde)) : "loading..."}
            </p>
          </AnimationOnScroll>
        </div>
        <div id="row">
          {props.data
            ? props.data.doctors.map((d, i) => (
                <div key={`${t(d.name)}-${i}`} className="col-md-3 col-sm-6 team">
                    <div className="thumbnail hover01 img-responsive" style={{marginBottom: 20}}>
                      {" "}
                      <Link
                        to="/doctors"
                        state={{
                          name: t(d.name),
                          image: d.img,
                          description: d.description,
                          title: d.title,
                        }}
                      >
                        <img src={d.img} alt="..." />
                      </Link>
                    </div>
                  <h4 style={{ marginBottom: 20 }}>{t(d.name)}</h4>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
