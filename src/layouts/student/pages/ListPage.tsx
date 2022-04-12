import MDBox from 'components/common/MDBox';
import * as React from 'react';
import StudentFilter from '../components/StudentFilter';
import StudentTable from '../components/StudentTable';
import dataTableStudent from '../data/dataTableStudent';

export default function ListPage() {
    return (
        <MDBox mt={3} sx={{ borderRadius: 2 }}>
            <StudentFilter />
            <MDBox>
                <StudentTable table={dataTableStudent} entriesPerPage={false} />
            </MDBox>
        </MDBox>
    );
}
