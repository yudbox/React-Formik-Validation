import React from 'react'
import cl from './FormControls.module.css'


export const InputElem = ({field, form, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <>
            <input className={`${cl.formControl__input} ${hasError ? cl.formControl__input_error : null}`} {...field} {...props}  />
            {hasError && <span className={cl.formControl__error}>{meta.error}</span>}
        </>
    )
}