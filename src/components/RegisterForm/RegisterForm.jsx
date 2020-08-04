import React, { useState } from 'react'
import avatar from '../../image/avatar.png'
import spinner from '../../image/loading24.svg'
import cl from './RegisterForm.module.css'
import { Formik, Form, Field } from 'formik';
import { inputValidation, inputLengthValidation, inputNumberValidation } from '../../utilites/validators/validators'
import { InputElem } from '../common/FormControls/FormControls'


const RegisterForm = () => {

    const [isFetching, setIsFetching] = useState(false);
    const [popupMode, setPopupMode] = useState(false);



    const initialValues = {
        formName: '',
        formSurname: '',
        formCity: '',
        formPhone: '',
    }

    const onSubmit = (values, onSubmitProps,) => {

        setIsFetching(true)
        setTimeout(() => {
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
            setIsFetching(false)
            setPopupMode(true)
        }, 2000)

    };


    return (
        <div className={cl.form_container}>
            <div className={cl.loginBox}>
                <img src={avatar} alt="" className={cl.avatar} />
                <h2 className={cl.loginBox__title}>Please fill up Register form</h2>

                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                    validateOnBlur={true}
                >
                    {(props) => (

                        <Form autoComplete="off">

                            <div className={cl.formControl}>
                                <label htmlFor='formName' >Name</label>
                                <Field name="formName" placeholder="Enter name" validate={inputValidation}>
                                    {InputElem}
                                </Field>
                            </div>
                            <div className={cl.formControl}>
                                <label htmlFor='formSurname' >Surname</label>
                                <Field type="text" name="formSurname" placeholder="Enter surname" validate={inputValidation} >
                                    {InputElem}
                                </Field>

                            </div>
                            <div className={cl.formControl}>
                                <label htmlFor='formCity' >Your city</label>
                                <Field type="text" name="formCity" placeholder="Enter your city" validate={inputLengthValidation} >
                                    {InputElem}
                                </Field>
                            </div>
                            <div className={cl.formControl}>
                                <label htmlFor='formPhone' >Phone</label>
                                <Field type="tel" name="formPhone" placeholder="Enter phone number" validate={inputNumberValidation} >
                                    {InputElem}
                                </Field>

                            </div>

                            <button disabled={props.isSubmitting}>{isFetching ? <span><img src={spinner} alt="" /></span> : <span>Register</span>}</button>

                        </Form>
                    )}

                </Formik>
            </div>
            {popupMode ? <PopupSeccess setPopupMode={setPopupMode} /> : null}
        </div>
    )
}

const PopupSeccess = ({ setPopupMode }) => {
    return (
        <div className={cl.popupSuccess} onClick={() => setPopupMode(false)} >
            <div className={cl.popupSuccess_text} >
                <div>Your are completely registered</div>
                <span>Click to continued</span>
            </div>
        </div>
    );
}



export default RegisterForm;