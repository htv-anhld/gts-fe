import i18n from 'i18next';
import common_jp from './translations/common_jp.json';
import common_en from './translations/common_en.json';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'en',
    interpolation: {
        escapeValue: false, //not needed for react as it escapes by default
    },
    resources: {
        en: {
            common: common_en, // 'common' is our custom namespace
        },
        jp: {
            common: common_jp,
        },
    },
});
