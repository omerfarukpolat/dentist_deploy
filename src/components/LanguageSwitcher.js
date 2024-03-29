import React from "react";
import { useTranslation } from "react-i18next";

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

            {i18n.language === "en" ? "TR" : "EN"}
        </button>
    );
}

export default LanguageSwitcher;
