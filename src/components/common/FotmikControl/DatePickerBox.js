import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Field, ErrorMessage} from 'formik'
import ErrorText from '../ErrorText/ErrorText'
import classes from './FormikControl.module.css'

const DatePickerBox = ({label, name, ...rest}) => {
    return (
        <div className={classes.formControl}>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({field, form}) => {
                        const {setFieldValue} = form
                        const {value} =  field
                        return (
                        <DatePicker 
                        id={name} 
                        {...field} 
                        {...rest} 
                        selected={value} 
                        onChange={val => setFieldValue(name, val)} />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={ErrorText} />
        </div>
        
    );
}

export default DatePickerBox;