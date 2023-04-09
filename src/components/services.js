import { Navigation } from "./navigation";
import { Avatar } from "@mui/material";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Dentics Hizmetlerimiz</h2>
        </div>
        <div>
          {props.data
            ? props.data.map((d, i) => (
                <div>
                  <div
                    key={`${d.name}-${i}`}
                    className="col-md-3"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={d.icon}
                      sx={{
                        width: 130,
                        height: 130,
                        backgroundColor: "white",
                        color: "blue",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        padding: 3,
                      }}
                    />
                    <div className="service-desc">
                      <h3 style={{ color: "black" }}>{d.name}</h3>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
