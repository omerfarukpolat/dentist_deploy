import { useContext, useEffect, useState } from "react";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";
import { Contact } from "./contact";
import JsonData from "../data/data_2.json";
import "../App.css";

const AllPages = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div lang={"tr"}>
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Team data={landingPageData.Team} />
      <Testimonials data={landingPageData.Testimonials} />
      <Services data={landingPageData.Services} />
      <Contact data={landingPageData.Contact} />
      <a
        href="https://wa.me/905322868340"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"/>
      </a>
    </div>
  );
};

export default AllPages;
