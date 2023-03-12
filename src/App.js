import SmoothScroll from "smooth-scroll";
import "./App.css";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Team } from "./components/Team";
import { useEffect, useState } from "react";
import JsonData from "./data/data.json";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import { Navigation } from "./components/navigation";
import AllPages from "./components/allpages";
import { Temp } from "./components/temp";
import "animate.css/animate.min.css";
import { TeamDetails } from "./components/teamDetails";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div lang={"tr"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
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
              element={<Testimonials data={landingPageData.Testimonials} />}
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
            <Route path="temp" element={<Temp />} />
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
