/*import React from "react";
import { useTranslation } from "react-i18next";
import ukFlag from "../img/ukFlag.jpg";
import turkishFlag from "../img/turkishFlag.jpg";
import {Avatar} from "@mui/material";

function LanguageSwitcher() {
    const { t, i18n } = useTranslation();

    function handleLanguageChange() {
        const newLanguage = i18n.language === "en" ? "tr" : "en";
        i18n.changeLanguage(newLanguage);

    }
    return (
        <button onClick={handleLanguageChange}>
            {i18n.language === "en" ? (
                <Avatar
                    src={turkishFlag}
                    sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: "white",
                        color: "blue",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            ) : (
                <Avatar
                    src={ukFlag}
                    sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: "white",
                        color: "blue",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            )}
        </button>
    );
}

export default LanguageSwitcher;
*/

import React from "react";
import { useTranslation } from "react-i18next";
import ukFlag from "../img/ukFlag.jpeg";
import turkishFlag from "../img/turkishFlag.jpg";
import { Avatar } from "@mui/material";
import team from "../img/team/en_ustte_arkaplanda.JPG";

function LanguageSwitcher() {
    const { t, i18n } = useTranslation();

    function handleLanguageChange() {
        const newLanguage = i18n.language === "en" ? "tr" : "en";
        i18n.changeLanguage(newLanguage);
    }

    const buttonStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: "50%",
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
    };

    return (
        <button onClick={handleLanguageChange} style={buttonStyle}>

            {i18n.language === "en" ? <img style={{width: 30, height: 30, borderRadius: "100%", transform: "scale(1)"}}
                src={require("../img/turkey.png")}
             alt={""}/> : <img style={{width: 30, height: 30, borderRadius: "100%"}}
                src={require("../img/united-kingdom.png")}
             alt={""}/>}
        </button>
    );
}

export default LanguageSwitcher;
