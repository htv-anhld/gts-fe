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

// @material-ui core components
import { MenuItem } from '@material-ui/core';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {
    Autocomplete,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Select,
    TextField,
} from '@mui/material';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
// Material Dashboard 2 PRO React TS components
import MDBox from 'components/common/MDBox';
import MDButton from 'components/common/MDButton';
import FormField from 'components/common/MDFormField';
import MDTypography from 'components/common/MDTypography';
import RadioField from 'components/custom/RadioField';
import SelectField from 'components/custom/SelectField';
import { Field, Form, Formik } from 'formik';
// Settings page components
import form from 'layouts/student/schemas/form';
import initialValuesStudentForm from 'layouts/student/schemas/initialValues';
import { useState } from 'react';
import selectData from './data/selectData';

interface KeyValuePair {
    label: string;
    value: string;
}

function BasicInfoForm(): JSX.Element {
    const [value, setValue] = useState<Date | null>(null);
    const { formId, formField } = form;
    const {
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
    } = formField;

    const handleSubmit = (values: any, actions: any) => {
        console.log('handle submit', values);
    };

    return (
        <Card id="basic-info" sx={{ overflow: 'visible' }}>
            <MDBox p={3}>
                <MDTypography variant="h5">基本情報</MDTypography>
            </MDBox>
            <Formik initialValues={initialValuesStudentForm} onSubmit={handleSubmit}>
                {({ values, setFieldValue, errors, touched, isSubmitting }) => {
                    return (
                        <Form id={formId} autoComplete="off">
                            <MDBox pb={3} px={3}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} lg={6}>
                                        <FormField
                                            type={conservator.type}
                                            label={conservator.label}
                                            name={conservator.name}
                                            value={values.conservator}
                                            error={errors.conservator && touched.conservator}
                                            inputProps={{ autoComplete: '' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <FormField
                                            type={managementNumber.type}
                                            label={managementNumber.label}
                                            name={managementNumber.name}
                                            value={values.managementNumber}
                                            error={errors.managementNumber && touched.managementNumber}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormField
                                            type={name.type}
                                            label={name.label}
                                            name={name.name}
                                            value={values.name}
                                            error={errors.name && touched.name}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                label="benCertEndDate"
                                                value={value}
                                                onChange={(newValue: any) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={(params: any) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                label={dateOfBirth.label}
                                                value={value}
                                                onChange={(newValue: any) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={(params: any) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <FormControl>
                                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <FormControl>
                                            <FormLabel id="demo-row-radio-buttons-group-label">Service type</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="blue" control={<Radio />} label="Blue" />
                                                <FormControlLabel value="purple" control={<Radio />} label="Purple" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <FormControl>
                                            <FormLabel id="demo-row-radio-buttons-group-label">Date Of Birth</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="blue" control={<Radio />} label="Blue" />
                                                <FormControlLabel value="purple" control={<Radio />} label="Purple" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <Grid item xs={12} sm={4}>
                                            <Field name={schoolLevel.name} component={SelectField}>
                                                {selectData.schoolLevel.map((data: KeyValuePair) => (
                                                    <MenuItem value={data.value}>{data.label}</MenuItem>
                                                ))}
                                            </Field>
                                        </Grid>
                                    </Grid>
                                    {/* <Grid item xs={12} sm={6} lg={12}>
                                        <Grid item xs={12} sm={4}>
                                            <Field name={grade.name} component={SelectField}>
                                                {selectData.grade.map((data: KeyValuePair) => (
                                                    <MenuItem value={data.key}>{data.value}</MenuItem>
                                                ))}
                                            </Field>
                                        </Grid>
                                    </Grid> */}
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <RadioField row name={serviceStatus.name} options={selectData.serviceStatus} />
                                        {/* <FormControl component="fieldset">
                                            <FormLabel id="demo-row-radio-buttons-group-label" component="legend">
                                                Service status
                                            </FormLabel>
                                            <RadioGroup
                                                name={serviceStatus.name}
                                                value={values.serviceStatus}
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                onChange={(event: HTMLInputElement) => {
                                                    setFieldValue(serviceStatus.name, event.currentTarget.value);
                                                }}
                                            >
                                                <FormControlLabel value="using" control={<Radio />} label="Using" />
                                                {/* <FormControlLabel
                                                    value="cancelled"
                                                    control={<Radio />}
                                                    label="Cancelled"
                                                /> */}
                                        {/* </RadioGroup>
                                        // </FormControl> */}
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <MDButton type="submit" variant="gradient" color="info" fullWidth>
                                            sign in
                                        </MDButton>
                                    </Grid>
                                </Grid>
                            </MDBox>
                        </Form>
                    );
                }}
            </Formik>
        </Card>
    );
}

export default BasicInfoForm;
