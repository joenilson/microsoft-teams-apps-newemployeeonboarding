import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-xhr-backend';
import * as microsoftTeams from "@microsoft/teams-js";

let locale = "es-ES";
microsoftTeams.initialize();
microsoftTeams.getContext((context: microsoftTeams.Context) => {
    i18n.changeLanguage(context.locale!);
});

i18n
    .use(Backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: window.navigator.language,
        fallbackLng: locale,
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;