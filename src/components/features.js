import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  CardActionArea,
  Divider,
} from "@mui/material";
import { red } from "@mui/material/colors";

function MoreVertIcon() {
  return null;
}

export const Features = (props) => {
  var items = [
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
            maxWidth: "30vw",
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
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                marginTop: -20,
              }}
            >
              <h4 style={{ fontSize: 30 }}>{props.item.title}</h4>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  return (
    <div
      id={"features"}
      style={{
        display: "flex",
        flexDirection: "row",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "60vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: 100 }}>
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
        <div style={{ width: "100vw" }}>
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
};
