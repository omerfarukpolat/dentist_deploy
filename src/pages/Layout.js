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
                  <Link to="/about">Biz Kimiz?</Link>
                </li>
                <li>
                  <Link to="/team">Ekibimiz</Link>
                </li>
                <li>
                  <Link to="/services">Tedaviler</Link>
                </li>
                <li>
                  <Link to="/portfolio">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">İletişim</Link>
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
