import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './data/translation_en.json';
import translationTr from './data/translation_tr.json';
i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'tr',
        debug: true,
        resources: {
            en: {
                translation: translationEn,
            },
            tr: {
                translation: translationTr
            }
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        react: {
            useSuspense: false //   <---- this will do the magic
        }
    });

export default i18n;
