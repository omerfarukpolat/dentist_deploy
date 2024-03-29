import { useState } from "react";
import emailjs from "emailjs-com";
import { Navigation } from "./navigation";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import {useTranslation} from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {

  const { t } = useTranslation();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA1idgC32DjdE964FagB7Mc_wQe2pxN2r4",
  });
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-6">
            <div className="row">
              <div className="section-title">
                <h2>{props.data ? (t(props.data.bize_danis)) : "loading..."}</h2>
                <p>
                  {props.data ? (t(props.data.bize_danis_aciklama)) : "loading..."}
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder={props.data ? (t(props.data.isim)) : "loading..."}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    style={{ resize: "none" }}
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder={props.data ? (t(props.data.mesaj_place)) : "loading..."}
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  {props.data ? (t(props.data.mesaj)) : "loading..."}
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-5 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3> {props.data ? (t(props.data.iletisim)) : "loading..."}</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> {props.data ? (t(props.data.adres)) : "loading..."}
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div></div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> {props.data ? (t(props.data.telefon)) : "loading..."}
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-instagram"></i> Instagram
                </span>{" "}
                <a href={"https://instagram.com/dentics_"} className="white-link"> @dentics_</a>
                <span>
                  <p></p>
                <i className="fa fa-envelope"></i> Email
                <p className="white-link"> dentics.tr@gmail.com </p>
                </span>
                </p>
            </div>

          </div>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "50%" }}
              zoom={15}
              center={{ lat: 39.90069, lng: 32.85846 }}
            >
              <Marker position={{ lat: 39.90069, lng: 32.85846 }} />
            </GoogleMap>
          )}


        </div>

      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy;
            {new Date().getFullYear()} {props.data ? props.data.name : "loading"} OFP-YBKv.1.1.1
          </p>
        </div>
      </div>
    </div>
  );
};
