import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import useWindowDimensions from "../hooks/useWindowDimensions";


import {useTranslation} from "react-i18next";

export const Features = (props) => {
  const { t } = useTranslation();
  const { height, width } = useWindowDimensions();
  let items = [
    {
      source: require("../img/periodonti.jpg"),
      title: "Periodonti",
    },
    {
      source: require("../img/prosthodontics.jpg"),
      title: "Prosthodontics",
    },
    {
      source: require("../img/root-canal-img.jpg"),
      title: "Kanal Tedavisi",
    },
  ];
  function Item(props) {
    return (
      <div style={{ height: "50vh" }}>
        <Card
          sx={{
            maxWidth: width > 950 ? "40vw" : "90vw",
            backgroundColor: "transparent",
          }}
        >
          <CardContent>
            <div
              style={{
                backgroundImage: "url(" + props.item.source + ")",
                width: "100%",
                height: "70%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </CardContent>
        </Card>
      </div>
    );
  }

  if(width > 450) {
  return (
    <div
      id={"features"}
      style={{
        display: "flex",
        height: width > 950 ? "70vh" : "90vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: width > 950 ? "row" : "column",
          width: width > 950 ? "60vw" : "90vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: 100 }} >
          <div style={{ marginBottom: "4vh" }}>
            <h1 style={{ color: "black" }}>{props.data ? (t(props.data.dogru_teshis)) : "loading..."}</h1>
            <Divider
              sx={{
                width: "19vw",
                height: 1.5,
                bgcolor: "grey.500",
              }}
            />
          </div>
          <p style={{ fontSize: 20 }}>
              {props.data ? (t(props.data.feature)) : "loading..."}

          </p>
        </div>
        <div style={{ width: "100vw", marginLeft: width > 900 ? "10vw": "0vw"}}>
          <Carousel
            indicators={false}
            fullHeightHover={true}
            animation={"slide"}
            duration={800}
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  ); } else {
    return (
        <div
            id={"features"}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
        >
          <div
              style={{
                display: "flex",
                flexDirection: width > 950 ? "row" : "column",
                width: width > 950 ? "60vw" : "90vw",
                justifyContent: "center",
                alignItems: "center",
              }}
          >
            <div style={{ marginRight: 100 }} >
              <div style={{ marginBottom: "4vh" }}>
                <h1 style={{ color: "black" }}>Doğru Teşhis & Gerekli Tedavi</h1>
                <Divider
                    sx={{
                      width: "19vw",
                      height: 1.5,
                      bgcolor: "grey.500",
                    }}
                />
              </div>
              <p style={{ fontSize: 20 }}>
                Dentics'e başvuran her hastamızı uzman kadromuz özenle muayene eder.
                Hastamızın şikayetini dikkatle dinleriz. Ağız muayenesi ve
                radyolojik tetkiklerin ışığında, var olan soruna doğru teşhisi
                koymak başarılı tedavinin ilk şartıdır. Teşhis sonrası hastamızın
                beklentileri de göz önünde bulundurularak, tüm uzman hekimlerimizin
                ortak görüşü olan tedavi planını uygulamaktayız.
              </p>
            </div>
            <div style={{ width: "100vw", marginLeft: width > 900 ? "10vw": "0vw"}}>
              <Carousel
                  indicators={false}
                  fullHeightHover={true}
                  animation={"slide"}
                  duration={800}
              >
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
    );
  }
};
