import {useContext, useEffect, useState} from "react";
import {Navigation} from "./navigation";
import {Header} from "./header";
import {Features} from "./features";
import {About} from "./about";
import {Services} from "./services";
import {Gallery} from "./gallery";
import {Testimonials} from "./testimonials";
import {Team} from "./Team";
import {Contact} from "./contact";
import JsonData from "../data/data.json";
import "../App.css";

const AllPages = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
      <div lang={"tr"}>
        <Header data={landingPageData.Header}/>
        <Features data={landingPageData.Features}/>
        <About data={landingPageData.About}/>
        <Services data={landingPageData.Services}/>
        <Testimonials data={landingPageData.Testimonials}/>
        <Team data={landingPageData.Team}/>
        <Contact data={landingPageData.Contact}/>
      </div>
  );
};

export default AllPages;
