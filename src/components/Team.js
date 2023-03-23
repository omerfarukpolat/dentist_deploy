import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const Team = (props) => {
  return (
    <div id="team" className="text-center team-background">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <AnimationOnScroll
            animateIn="animate__slideInDown"
            duration={2}
            animateOnce={true}
          >
            <h2>Hekimlerimiz</h2>
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInDown"
            duration={2}
            animateOnce={true}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </AnimationOnScroll>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <figure>
                    <div className="thumbnail hover01 img-responsive">
                      {" "}
                      <Link
                        to="/doctors"
                        state={{
                          name: d.name,
                          image: d.img,
                          description: d.description,
                          title: d.title,
                        }}
                      >
                        <img src={d.img} alt="..." />
                      </Link>
                      <div className="caption" style={{ marginTop: 20 }}></div>
                    </div>
                  </figure>
                  <h4 style={{ marginBottom: 20 }}>{d.name}</h4>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
