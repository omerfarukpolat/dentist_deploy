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
import { AnimationOnScroll } from 'react-animation-on-scroll';
const AllPages = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
      <div lang={"tr"}>
        <Header data={landingPageData.Header}/>
        <About data={landingPageData.About}/>
        <Team data={landingPageData.Team}/>
        <Services data={landingPageData.Services}/>
        <Features data={landingPageData.Features}/>
        <Testimonials data={landingPageData.Testimonials}/>
        <Contact data={landingPageData.Contact}/>
      </div>
  );
};

export default AllPages;
