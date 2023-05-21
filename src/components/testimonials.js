import {Navigation} from "./navigation";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


export const Testimonials = (props) => {
    const { t } = useTranslation();
    return (
    <div id='testimonials' className="text-center">
      <div className='container'>
        <div className='section-title text-center'>
          <h2>{props.data ? (t(props.data.ekip)) : "loading..."}</h2>
        </div>
        <div id="row">
          {props.data
              ? props.data.staff.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                    <figure>
                      <div className="thumbnail hover01 img-responsive" style={{marginBottom: 10}}>
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
                      </div>
                    </figure>
                    <h4 style={{ marginBottom: 20 }}>{d.name}</h4>
                  </div>
              ))
              : "loading"}
        </div>
      </div>
    </div>
  )
}
