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
                opacity: 1,
                width: "100%",
                height: "100%",
              }}
            >
              <h4>{props.item.title}</h4>
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
        width: "100vw",
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
          <h1>Tedavilerimiz</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec
            tincidunt nisl nisl sit amet nisl. Sed consectetur, nisl nec
            ultricies lacinia, nisl nisl aliquet nisl, nec tincidunt nisl nisl
            sit amet nisl.
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
