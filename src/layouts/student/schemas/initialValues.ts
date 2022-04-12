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

import checkout from 'layouts/student/schemas/form';

const {
    formField: {
        managementNumber,
        benCertEndDate,
        serviceType,
        gender,
        name,
        dateOfBirth,
        schoolLevel,
        grade,
        conservator,
    },
} = checkout;

const initialValuesStudentForm: { [x: string]: string | null } = {
    [managementNumber.name]: '',
    [benCertEndDate.name]: null,
    [serviceType.name]: '',
    [gender.name]: '',
    [name.name]: '',
    [dateOfBirth.name]: null,
    [schoolLevel.name]: '',
    [grade.name]: '',
    [conservator.name]: '',
};

export default initialValuesStudentForm;
