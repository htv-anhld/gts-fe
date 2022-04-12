import MDBox from 'components/common/MDBox';
import { Student } from 'models/Student';
import React, { useEffect, useState } from 'react';
import StudentFilter from '../components/StudentFilter';
import StudentTable from '../components/StudentTable';
import dataTableStudent from '../data/dataTableStudent';
import moment from 'moment';
import { ContactApiService } from 'services/students.service';

interface IDataTableStudent {
    columns: { [key: string]: any }[];
    rows: { [key: string]: any }[];
}

export default function ListPage(): JSX.Element {
    const [data, setData] = useState<IDataTableStudent>(dataTableStudent);
    const [fullData, setFullData] = useState<IDataTableStudent>(dataTableStudent);

    useEffect(() => {
        ContactApiService.getAllContacts()
            .then((res: any) => res.data.data)
            .then((datas: Student[]) => {
                const newDataTable = Object.assign({}, data);
                const dataRows = datas.map((data: Student) => {
                    return {
                        ...data,
                        age: moment().diff(data.dateOfBirth, 'years'),
                    };
                });
                newDataTable.rows = [...dataRows];
                setData(newDataTable);
                setFullData(newDataTable);
            })
            .catch((err: any) => console.log('ERROR', err));
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newRows = fullData.rows.filter((row) => {
            return row.name.toLowerCase().includes(event.target.value.trim().toLowerCase());
        });

        const newData = Object.assign({}, fullData);
        newData.rows = newRows;
        setData(newData);
    };

    return (
        <MDBox mt={3} sx={{ borderRadius: 2 }}>
            <MDBox>
                <StudentFilter onHandleSearch={handleSearch} />
            </MDBox>
            <MDBox>
                <StudentTable table={data} entriesPerPage={false} />
            </MDBox>
        </MDBox>
    );
}
