import SmoothScroll from "smooth-scroll";
import "./App.css";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Team } from "./components/Team";
import React, { useEffect, useState } from "react";
import JsonData from "./data/data_2.json";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import { Navigation } from "./components/navigation";
import AllPages from "./components/allpages";
import "animate.css/animate.min.css";
import { TeamDetails } from "./components/teamDetails";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useTranslation, withTranslation, Trans } from 'react-i18next';


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const { t } = useTranslation();

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div lang={"tr"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout data={landingPageData.Layout} />}>
            <Route index element={<AllPages />} />
            <Route
              path="about"
              element={<About data={landingPageData.About} />}
            />
            <Route
              path="services"
              element={<Services data={landingPageData.Services} />}
            />
            <Route
              path="gallery"
              element={<Gallery data={landingPageData.Gallery} />}
            />
            <Route
              path="testimonials"
              element={<Testimonials data={landingPageData.Team} />}
            />
            <Route path="team" element={<Team data={landingPageData.Team} />} />
            <Route
              path="contact"
              element={<Contact data={landingPageData.Contact} />}
            />
            <Route
              path="features"
              element={<Features data={landingPageData.Features} />}
            />
            <Route
              path="doctors"
              element={<TeamDetails data={landingPageData.Team} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
