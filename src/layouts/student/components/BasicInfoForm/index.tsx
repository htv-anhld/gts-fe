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
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {
    Autocomplete,
    AutocompleteProps,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import { SelectChangeEvent } from '@mui/material/Select';
import select from 'assets/theme/components/form/select';
// Material Dashboard 2 PRO React TS components
import MDBox from 'components/common/MDBox';
import MDButton from 'components/common/MDButton';
import FormField from 'components/common/MDFormField';
import MDTypography from 'components/common/MDTypography';
import { Form, Formik } from 'formik';
// Settings page components
import form from 'layouts/student/schemas/form';
import initialValuesStudentForm from 'layouts/student/schemas/initialValues';
import { SyntheticEvent, useState } from 'react';
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
    } = formField;

    const handleSubmit = (values: any, actions: any) => {
        console.log('handle submit', values);
    };

    const handleChange = (event: SelectChangeEvent) => {
        console.log(event);

        // setAge(event.target.value as string);
    };

    return (
        <Card>
            <MDBox p={3}>
                <MDTypography variant="h5">基本情報</MDTypography>
            </MDBox>
            <Formik initialValues={initialValuesStudentForm} onSubmit={handleSubmit}>
                {({ values, setFieldValue, errors, touched, isSubmitting }) => {
                    return (
                        <Form id={formId}>
                            <MDBox pb={3} px={3}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} lg={12}>
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
                                    <Grid item xs={12} sm={6} lg={12}>
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
                                                label={benCertEndDate.label}
                                                value={values.benCertEndDate}
                                                onChange={(value: any) => {
                                                    console.log(value);

                                                    setFieldValue(benCertEndDate.name, value);
                                                }}
                                                renderInput={(params: any) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                label={dateOfBirth.label}
                                                value={values.dateOfBirth}
                                                onChange={(value: any) => {
                                                    console.log(value);

                                                    setFieldValue(dateOfBirth.name, value);
                                                }}
                                                renderInput={(params: any) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <FormControl>
                                            <FormLabel id="demo-row-radio-buttons-group-label">
                                                {serviceType.label}
                                            </FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                defaultValue={values.serviceType}
                                                onChange={(event: React.ChangeEvent<HTMLInputElement>, value: string) =>
                                                    setFieldValue(serviceType.name, value)
                                                }
                                            >
                                                {selectData.serviceType.map((service, idx) => (
                                                    <FormControlLabel
                                                        key={idx}
                                                        value={service}
                                                        control={<Radio />}
                                                        label={service}
                                                    />
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <FormControl>
                                            <FormLabel id="demo-row-radio-buttons-group-label">
                                                {gender.label}
                                            </FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                defaultValue={values.service}
                                                onChange={(event: React.ChangeEvent<HTMLInputElement>, value: string) =>
                                                    setFieldValue(gender.name, value)
                                                }
                                            >
                                                {selectData.gender.map((gender, idx) => (
                                                    <FormControlLabel
                                                        key={idx}
                                                        value={gender}
                                                        control={<Radio />}
                                                        label={gender}
                                                    />
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <Autocomplete
                                            size="medium"
                                            value={values.schoolLevel}
                                            options={selectData.schoolLevel}
                                            onChange={(
                                                event: SyntheticEvent<Element, Event>,
                                                value: string | { label: string; value: string },
                                            ) =>
                                                setFieldValue(
                                                    schoolLevel.name,
                                                    typeof value === 'string' ? value : value.value,
                                                )
                                            }
                                            renderInput={(params) => (
                                                <FormField
                                                    name={schoolLevel.name}
                                                    {...params}
                                                    label={schoolLevel.label}
                                                    InputLabelProps={{ shrink: true }}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={12}>
                                        <Autocomplete
                                            size="medium"
                                            value={values.grade}
                                            options={selectData.grade}
                                            onChange={(
                                                event: SyntheticEvent<Element, Event>,
                                                value: string | { label: string; value: string },
                                            ) =>
                                                setFieldValue(
                                                    grade.name,
                                                    typeof value === 'string' ? value : value.value,
                                                )
                                            }
                                            renderInput={(params) => (
                                                <FormField
                                                    name={grade.name}
                                                    {...params}
                                                    label={grade.label}
                                                    InputLabelProps={{ shrink: true }}
                                                />
                                            )}
                                        />
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
