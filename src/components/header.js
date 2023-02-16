import {useContext} from "react";
import {Context as PageContext} from "../context/PageContext";
import {Navigation} from "./navigation";
import {Link} from "react-router-dom";
import {AnimationOnScroll} from "react-animation-on-scroll";

export const Header = (props) => {

  return (
      <header id='header'>
        <AnimationOnScroll animateIn="animate__fadeIn" duration={1} animateOnce={true}>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 intro-text'>
                  <h1>
                    {props.data ? props.data.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <Link className='btn btn-custom btn-lg page-scroll' to="/temp">Daha Fazla
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
          </AnimationOnScroll>
      </header>
  )
}
