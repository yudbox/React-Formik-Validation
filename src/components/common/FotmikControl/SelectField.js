import React from 'react';
import {Field, ErrorMessage} from 'formik'
import classes from './FormikControl.module.css'
import ErrorText from '../ErrorText/ErrorText'

const SelectField = ({label, name, options, ...rest}) => {
    return (
        <div className={classes.formControl}>
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest}>
                {
                    options.map(option=> {
                        return(
                            <option key={option.value} value={option.value}>
                                {option.key}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={ErrorText} />

        </div>
        
    );
}

export default SelectField;
