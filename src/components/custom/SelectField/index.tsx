import { Select } from '@material-ui/core';
import * as React from 'react';

export interface ISelectFieldProps {
    children: JSX.Element;
    form: any;
    field: any;
}

export default function SelectField({ children, form, field }: ISelectFieldProps) {
    const { name, value } = field;
    const { setFieldValue } = form;
    return (
        <Select
            name={name}
            value={value}
            onChange={(e) => {
                setFieldValue(name, e.target.value);
            }}
        >
            {children}
        </Select>
    );
}
