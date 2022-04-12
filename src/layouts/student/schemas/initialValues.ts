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
        serviceStatus,
    },
} = checkout;

const initialValuesStudentForm = {
    [managementNumber.name]: '',
    [benCertEndDate.name]: '',
    [serviceType.name]: '',
    [gender.name]: '',
    [name.name]: '',
    [dateOfBirth.name]: '',
    [schoolLevel.name]: '',
    [grade.name]: '',
    [conservator.name]: '',
    [serviceStatus.name]: '',
};

export default initialValuesStudentForm;
