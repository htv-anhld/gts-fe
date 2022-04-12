import { FormControl, RadioGroup, FormControlLabel, FormLabel, Radio } from '@material-ui/core';
import React from 'react';
import { Field, useField } from 'formik';
interface KeyValuePair {
    label: string;
    value: string;
}
export interface IRadioFieldProps {
    name: string;
    options: KeyValuePair[];
    row: any;
}

export default function RadioField({ name, options, row, ...props }: IRadioFieldProps) {
    const [field] = useField(name);
    return (
        <FormControl component="fieldset" name={name}>
            <RadioGroup name={name} row={row}>
                {options.map((option: KeyValuePair) => (
                    <FormControlLabel
                        {...field}
                        {...props}
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}
