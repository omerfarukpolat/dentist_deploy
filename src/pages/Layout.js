import { Outlet, Link } from "react-router-dom";
import {Header} from "../components/header";
import {Features} from "../components/features";
import {About} from "../components/about";
import {Services} from "../components/services";
import {Gallery} from "../components/gallery";
import {Testimonials} from "../components/testimonials";
import {Team} from "../components/Team";
import {Contact} from "../components/contact";
import {useEffect, useState} from "react";
import JsonData from "../data/data.json";

const Layout = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
      <>
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
          <div className='container'>
            <div className='navbar-header'>
              <button
                  type='button'
                  className='navbar-toggle collapsed'
                  data-toggle='collapse'
                  data-target='#bs-example-navbar-collapse-1'
              >
                {' '}
                <span className='sr-only'>Toggle navigation</span>{' '}
                <span className='icon-bar'></span>{' '}
                <span className='icon-bar'></span>{' '}
                <span className='icon-bar'></span>{' '}
              </button>
              <Link className='navbar-brand page-scroll' to="/">
                <img style={{marginTop: -10}} src='img/logo.png'  alt={''}/>
              </Link>
            </div>
            <div
                className='navbar-expand-sm navbar-collapse'
                id='bs-example-navbar-collapse-1'
            >
              <ul className='nav navbar-nav navbar-right'>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/about">Biz Kimiz?</Link>
                </li>
                <li>
                  <Link to="/about">Biz Kimiz?</Link>
                </li>
                <li>
                  <Link to="/about">Biz Kimiz?</Link>
                </li>
                <li>
                  <Link to="/about">Biz Kimiz?</Link>
                </li>
                <li>
                  <Link to="/about">Biz Kimiz?</Link>
                </li>
                <li>
                  <a href='#about' className='page-scroll'>
                    Biz Kimiz?
                  </a>
                </li>
                <li>
                  <a href='#team' className='page-scroll'>
                    Hekimlerimiz
                  </a>
                </li>
                <li>
                  <a href='#services' className='page-scroll'>
                    Tedaviler
                  </a>
                </li>
                <li>
                  <a href='#portfolio' className='page-scroll'>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href='#contact' className='page-scroll'>
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
  )
};

export default Layout;
