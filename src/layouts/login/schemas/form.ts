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

const form = {
    formId: 'login-form',
    formField: {
        username: {
            name: 'username',
            label: 'User Name',
            type: 'text',
            errorMsg: 'Email address is required.',
            invalidMsg: 'Your email is invalid',
        },
        password: {
            name: 'password',
            label: 'Password',
            type: 'password',
            errorMsg: 'Password is required.',
            invalidMsg: 'Your password should be more than 6 characters.',
        },
    },
};

export default form;
