/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import './i18n/config';
// Material Dashboard 2 PRO React TS Context Provider
import { MaterialUIControllerProvider } from "context";

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
});

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
