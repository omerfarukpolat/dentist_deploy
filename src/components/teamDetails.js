import { useLocation } from "react-router-dom";
import team from "../img/team/en_ustte_arkaplanda.JPG";
import { Contact } from "./contact";
import { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import JsonData from "../data/data_2.json";
import {useTranslation} from "react-i18next";
import useWindowDimensions from "../hooks/useWindowDimensions";
export const TeamDetails = () => {

  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const location = useLocation();
  const data = location.state;


  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
    window.scrollTo(0, 0);
  }, []);

  if(width > 950) {
    return (
        <div id="teamDetail" className={"team-background col-sm-12 col-lg-12"}>
          {
              width > 500 && (
                  <div
                      className={"team-img"}
                      style={{
                        marginTop: 20,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                  >
                    <img
                        src={team}
                        style={{
                          width: "60%",
                          height: "100%",
                          opacity: 0.8,
                          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 1)",
                          background: "blur(50px)",
                        }}
                     alt={''}/>
                  </div>)
          }

          <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                margin: 0,
                marginBottom: 50,
              }}
          >
            <div
                style={{
                  width: "22vw",
                  height: "60vh",
                }}
            >
              <div
                  style={{
                    borderWidth: 2,
                    borderRadius: 30,
                    borderColor:
                        "linear-gradient(to right, #815712 60%, #230903 100%)",
                    borderStyle: "solid",
                    width: "100%",
                    height: "100%",
                  }}
              >
                <img
                    src={data.image ? data.image : ''}
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: 10,
                      borderRadius: 30,
                      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 1)",
                    }}
                 alt={''}/>
              </div>
            </div>
            <AnimationOnScroll
                style={{overflow: "hidden !important" }}
                animateIn="animate__zoomIn"
                delay={2}
                duration={3}
                animateOnce={true}
            >
              <div
                  style={{ marginLeft: "2vw", maxWidth: "40vw", color: "black" }}
                  className={"about-text"}
              >
                <h2>{data.name}</h2>
                <h1>{t(data.title)}</h1>
                <div style={{ height: "3vh" }}></div>
                <p>{t(data.description)}</p>
              </div>
            </AnimationOnScroll>
          </div>
          <Contact data={landingPageData.Contact} />
        </div>
    );
   } else {
    return (
        <div id="teamDetail" className={"team-background col-sm-12 col-lg-12"}>
          <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                margin: 10,
                marginTop: "10vh",
              }}
          >
            <div
                style={{
                  width: "100vw",
                  height: "60vh",
                  marginTop: "3vh"
                }}
            >
              <div
                  style={{
                    borderWidth: 2,
                    borderRadius: 30,
                    borderColor:
                        "linear-gradient(to right, #815712 60%, #230903 100%)",
                    borderStyle: "solid",
                    width: "100%",
                    height: "100%",
                  }}
              >
                <img
                    src={data.image ? data.image : ''}
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: 10,
                      borderRadius: 30,
                      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 1)",
                    }}
                />
              </div>
            </div>
          </div>
          <AnimationOnScroll
              style={{overflow: "hidden !important" }}
              animateIn="animate__zoomIn"
              delay={2}
              duration={3}
              animateOnce={true}
          >
            <div
                style={{ marginLeft: "5vw", maxWidth: "100vw", color: "black", marginTop: "3vh" }}
                className={"about-text"}
            >
              <h2>{t(data.name)}</h2>
              <h1>{t(data.title)}</h1>
              <div style={{ height: "3vh" }}></div>
              <p>{t(data.description)}</p>
            </div>
          </AnimationOnScroll>
          <Contact data={landingPageData.Contact} />
        </div>
    );
  }

};
