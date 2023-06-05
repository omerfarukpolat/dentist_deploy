import { Navigation } from "./navigation";
import { Avatar } from "@mui/material";
import {useTheme} from "@mui/styles";
import {useTranslation} from "react-i18next";

export const Services = (props) => {
    const { t } = useTranslation();
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{props.data ? (t(props.data.hizmet)) : "loading..."}</h2>
        </div>
        <div>
          {props.data
            ? props.data.services.map((d, i) => (
                <div>
                  <div
                    key={`${t(d.name)}-${i}`}
                    className="col-md-2"
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
                      <h3 style={{ color: "black" }}>{t(d.name)}</h3>
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
