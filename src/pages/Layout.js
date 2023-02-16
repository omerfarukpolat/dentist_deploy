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
import { Dropdown } from 'react-bootstrap';

const Layout = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const checkLocation =() => {
    window.scrollTo(0,0);
  }

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

              <Link to={"/"} className='navbar-brand page-scroll'>
                <img style={{marginTop: -10, width: 150, height: 50}} src='img/logo3.png'  onClick={checkLocation} alt={''}/>
              </Link>

            </div>
            <div
                className='navbar-expand-sm navbar-collapse'
                id='bs-example-navbar-collapse-1'
            >
              <ul className='nav navbar-nav navbar-right'>
                <li>
                  <a href='#about' onClick={() => window.location.pathname === '/' ? null : window.location.pathname = '/'} className='page-scroll'>
                    Biz Kimiz?
                  </a>
                </li>
                <li>
                  <a href='#team' onClick={() => window.location.pathname === '/' ? null : window.location.pathname = '/'}  className='page-scroll'>
                    Ekibimiz
                  </a>
                </li>
                <li>
                  <a href='#services' onClick={() => window.location.pathname === '/' ? null : window.location.pathname = '/'}  className='page-scroll'>
                    Tedaviler
                  </a>
                </li>
                <li>
                  <a href='#contact' onClick={() => window.location.pathname === '/' ? null : window.location.pathname = '/'} className='page-scroll'>
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
