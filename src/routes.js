import { useContext, useEffect, useState } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import "./App.css";
import { Temp } from "./components/temp";
import { Context as PageContext } from "./context/PageContext";
import { Provider as PageProvider } from "./context/PageContext";

const Layout = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [otherPage, setOtherPage] = useState(false);

  const { state, setPage } = useContext(PageContext);
  const page = useState();
  page[0] = state.page;
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    setOtherPage(state.page);
    changePage();
  }, [page]);

  const changePage = () => {
    return (
      <div>
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Gallery data={landingPageData.Gallery} />
        <Testimonials data={landingPageData.Testimonials} />
        <Team data={landingPageData.Team} />
        <Contact data={landingPageData.Contact} />
      </div>
    );
  };

  return (
    <div lang={"tr"}>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Layout;
