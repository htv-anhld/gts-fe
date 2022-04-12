import MDBox from 'components/common/MDBox';
import * as React from 'react';
import BasicInfoForm from '../BasicInfoForm';
import FormHeader from '../FormHeader';

export interface IStudentFormProps {}

export default function StudentForm(props: IStudentFormProps) {
    function getTabContent(tabIndex: number, formData: any): JSX.Element {
        switch (tabIndex) {
            case 1:
                return <div>Tab 1</div>;
            case 2:
                return <div>Tab 2</div>;
            case 3:
                return <div>Tab 3</div>;
            case 4:
                return <div>Tab 4</div>;
            case 5:
                return <div>Tab 5</div>;
            default:
                return null;
        }
    }

    return (
        <MDBox>
            <FormHeader />
            <MDBox mt={3}>
                <BasicInfoForm />
            </MDBox>
        </MDBox>
    );
}
