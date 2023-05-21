import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
    const { t, i18n } = useTranslation();

    function handleLanguageChange() {
        const newLanguage = i18n.language === "en" ? "tr" : "en";
        i18n.changeLanguage(newLanguage);

    }
    return (
        <button onClick={handleLanguageChange} className="btn" width="60" height="100">
            {i18n.language === "en" ? "Türkçe Versiyon" : "Englısh Version"}
        </button>
    );
}

export default LanguageSwitcher;
