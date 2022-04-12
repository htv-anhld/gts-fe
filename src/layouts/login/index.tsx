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

// @mui material components
import Card from '@mui/material/Card';
import Switch from '@mui/material/Switch';
// Images
import bgImage from 'assets/images/bg-sign-in-basic.jpeg';
// Material Dashboard 2 PRO React TS components
import MDBox from 'components/common/MDBox';
import MDButton from 'components/common/MDButton';
import FormField from 'components/common/MDFormField';
import MDTypography from 'components/common/MDTypography';
import MDAlert from "components/common/MDAlert";
import { Form, Formik } from 'formik';
// Authentication layout components
import BasicLayout from 'layouts/authentication/components/BasicLayout';
import form from 'layouts/login/schemas/form';
import { useState } from 'react';
// react-router-dom components
import { Link } from 'react-router-dom';
import initialValuesFormLogin from './schemas/initialValues';
import validationsFormLogin from './schemas/validations';
import { AuthService } from "../../api/AuthService";

function Basic(): JSX.Element {
    const { formId, formField } = form;
    const { username, password } = formField;
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const handleSetRememberMe = () => setRememberMe(!rememberMe);

    const handleSubmit = async (values: any, actions: any) => {
        console.log({ values, actions });
        const authService = new AuthService();
        const response = await authService.login({username: values.username, password: values.password});
        if (response) {
            window.document.location = "/";
        }
    };

    
    return (
        <BasicLayout image={bgImage}>
            <Card>
                <MDBox
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                    mx={2}
                    mt={-3}
                    p={2}
                    mb={1}
                    textAlign="center"
                >
                    <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                        Sign in
                    </MDTypography>
                </MDBox>
                <MDBox pt={4} pb={3} px={3}>
                    <Formik
                        initialValues={initialValuesFormLogin}
                        validationSchema={validationsFormLogin}
                        onSubmit={handleSubmit}
                    >
                        {({ values, errors, touched, isSubmitting }) => {
                            return (
                                <Form id={formId} autoComplete="off">
                                    <MDBox mb={1}><MDAlert color="error">This is an alert!</MDAlert></MDBox>
                                    <MDBox mb={2}>
                                        <FormField
                                            type={username.type}
                                            label={username.label}
                                            name={username.name}
                                            value={values.username}
                                            error={errors.username}
                                            inputProps={{ autoComplete: '' }}
                                        />
                                    </MDBox>
                                    <MDBox mb={2}>
                                        <FormField
                                            type={password.type}
                                            label={password.label}
                                            name={password.name}
                                            value={values.password}
                                            error={errors.password && touched.password}
                                            inputProps={{ autoComplete: '' }}
                                        />
                                    </MDBox>
                                    <MDBox display="flex" alignItems="center" ml={-1}>
                                        <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                                        <MDTypography
                                            variant="button"
                                            fontWeight="regular"
                                            color="text"
                                            onClick={handleSetRememberMe}
                                            sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
                                        >
                                            &nbsp;&nbsp;Remember me
                                        </MDTypography>
                                    </MDBox>
                                    <MDBox mt={4} mb={1}>
                                        <MDButton type="submit" variant="gradient" color="info" fullWidth>
                                            sign in
                                        </MDButton>
                                    </MDBox>
                                    <MDBox mt={3} mb={1} textAlign="center">
                                        <MDTypography variant="button" color="text">
                                            Don&apos;t have an account?{' '}
                                            <MDTypography
                                                component={Link}
                                                to="/authentication/sign-up/cover"
                                                variant="button"
                                                color="info"
                                                fontWeight="medium"
                                                textGradient
                                            >
                                                Sign up
                                            </MDTypography>
                                        </MDTypography>
                                    </MDBox>
                                </Form>
                            );
                        }}
                    </Formik>
                </MDBox>
            </Card>
        </BasicLayout>
    );
}

export default Basic;
