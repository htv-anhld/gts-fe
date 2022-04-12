import MDBox from 'components/common/MDBox';
import * as React from 'react';
import StudentForm from '../components/StudentForm/StudentForm';

export default function AddEditPage(): JSX.Element {
    return (
        <MDBox mt={3}>
            <StudentForm />
        </MDBox>
    );
}
