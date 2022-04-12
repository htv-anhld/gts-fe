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

/* eslint-disable react/prop-types */
// ProductsList page components

//resources
import DefaultCell from '../components/DefaultCell';
interface IDataTableVideo {
    columns: {
        Header: string;
        accessor: string;
        Cell: any;
    }[];
    rows: {
        managementNumber: number;
        benCertEndDate: string;
        serviceType: string;
        gender: string;
        name: string;
        dateOfBirth: string;
        schoolLevel: number;
        age: number;
        grade: number;
        conservator: string;
        serviceStatus: string;
    }[];
}

const dataTableStudent: IDataTableVideo = {
    columns: [
        {
            Header: '管理番号',
            accessor: 'managementNumber',
            Cell: ({ value }: { value: number }) => <DefaultCell value={value} />,
        },
        {
            Header: '受給者証有効期間終了日',
            accessor: 'benCertEndDate',
            Cell: ({ value }: { value: string }) => <DefaultCell value={value} />,
        },
        {
            Header: 'サービス種類',
            accessor: 'serviceType',
            Cell: ({ value }: { value: string }) => <DefaultCell value={value} />,
        },
        {
            Header: '児童',
            accessor: 'name',
            Cell: ({ value }: { value: string }) => <DefaultCell value={value} />,
        },
        {
            Header: '性別',
            accessor: 'gender',
            Cell: ({ value }: { value: string }) => <DefaultCell value={value} />,
        },
        {
            Header: '生年月日',
            accessor: 'dateOfBirth',
            Cell: ({ value }: { value: string }) => <DefaultCell value={value} />,
        },
        {
            Header: '年齢',
            accessor: 'age',
            Cell: ({ value }: { value: number }) => <DefaultCell value={value} />,
        },
        {
            Header: '学年目安',
            accessor: 'grade',
            Cell: ({ value }: { value: number }) => <DefaultCell value={value} />,
        },
        {
            Header: '保護者名',
            accessor: 'conservator',
            Cell: ({ value }: { value: string }) => <DefaultCell value={value} />,
        },
        {
            Header: '使用状態',
            accessor: 'serviceStatus',
            Cell: ({ value }: { value: string }) => <DefaultCell value={value} />,
        },
    ],

    rows: [
        {
            managementNumber: 2,
            benCertEndDate: '2022 / 04 / 05',
            serviceType: 'blue',
            gender: 'male',
            name: 'Sakura',
            dateOfBirth: '2022 / 04 / 05',
            schoolLevel: 1,
            age: 10,
            grade: 1,
            conservator: 'Yamato',
            serviceStatus: 'using',
        },
        {
            managementNumber: 1,
            benCertEndDate: '2022 / 04 / 06',
            serviceType: 'blue',
            gender: 'female',
            name: 'Sakura',
            dateOfBirth: '2022 / 04 / 06',
            schoolLevel: 2,
            age: 11,
            grade: 2,
            conservator: 'Yamato',
            serviceStatus: 'using',
        },
    ],
};

export default dataTableStudent;
