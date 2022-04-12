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

import checkout from 'layouts/pages/users/new-user/schemas/form';
import * as Yup from 'yup';

const {
    formField: { username, password },
} = checkout;

const validationsFormLogin = Yup.object().shape({
    [username.name]: Yup.string().required(username.errorMsg),
    [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
    // [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
});

export default validationsFormLogin;
