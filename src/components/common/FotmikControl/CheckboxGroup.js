import React from 'react';
import {Field, ErrorMessage} from 'formik'
import classes from './FormikControl.module.css'
import ErrorText from '../ErrorText/ErrorText'

const CheckboxGroup = ({label, name, options, ...rest}) => {
    return (
        <div className={classes.formControl}>
            <label>{label}</label>
            <div className={classes.formControl__itemsContainer}>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        return options.map(option => {
                            return(
                                <div className={classes.formControl__item} key={option.key}>
                                    <input 
                                    type='checkbox' 
                                    id={option.value} 
                                    {...field} 
                                    value={option.value} 
                                    checked={field.value.includes(option.value)} />
                                    <label htmlFor={option.value}>{option.key}</label>
                                </div>
                            )
                        })
                            
                        
                    }
                }
            </Field>
            </div>
            
            <ErrorMessage name={name} component={ErrorText} />

        </div>
        
    );
}

export default CheckboxGroup;
