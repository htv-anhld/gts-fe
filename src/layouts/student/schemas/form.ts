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
    formId: 'register-student-form',
    formField: {
        managementNumber: {
            name: 'managementNumber',
            label: 'Management Number',
            type: 'text',
            errorMsg: 'Management Number is required.',
        },
        benCertEndDate: {
            name: 'benCertEndDate',
            label: 'Ben Cert End Date',
            type: 'text',
            errorMsg: 'Ben Cert End Date is required.',
        },
        serviceType: {
            name: 'serviceType',
            label: 'Service Type',
            type: 'text',
            errorMsg: 'Service Type is required.',
        },
        gender: {
            name: 'gender',
            label: 'Gender',
            type: 'text',
            errorMsg: 'Gender is required.',
            invalidMsg: 'Gender is invalid',
        },
        name: {
            name: 'name',
            label: 'Name',
            type: 'text',
            errorMsg: 'Name is required.',
        },
        dateOfBirth: {
            name: 'dateOfBirth',
            label: 'Birthday',
            type: 'text',
            errorMsg: 'Date Of Birth required.',
        },
        schoolLevel: {
            name: 'schoolLevel',
            label: 'SchoolLevel',
            type: 'text',
            errorMsg: 'SchoolLevel is required.',
        },
        grade: {
            name: 'grade',
            label: 'Grade',
            type: 'text',
            errorMsg: 'Grade is required.',
        },
        conservator: {
            name: 'conservator',
            label: 'Conservator',
            type: 'text',
            errorMsg: 'Conservator is required.',
        },
        serviceStatus: {
            name: 'serviceStatus',
            label: 'Service Status',
            type: 'text',
            errorMsg: 'Service Status is required.',
        },
    },
};

export default form;
