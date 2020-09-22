import React, { useState } from 'react'
import avatar from '../../image/avatar.png'
import spinner from '../../image/loading24.svg'
import cl from './RegisterForm.module.css'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import { inputValidation, inputLengthValidation, inputNumberValidation } from '../../utilites/validators/validators'
import { InputElem } from '../common/FormControls/FormControls'
import ErrorText from '../common/ErrorText/ErrorText'
import * as Yup from 'yup'


const RegisterForm = () => {

    const [isFetching, setIsFetching] = useState(false);
    const [popupMode, setPopupMode] = useState(false);



    const initialValues = {
        email: '',
        formName3: '',
        formSurname: '',
        formCity: '',
        formPhone: '',
        social: {
            fb: '',
            twitter: ''
        },
        phoneNumber: ['', ''],
        phNumbers: ['']
    }

    const onSubmit = (values, onSubmitProps,) => {
        console.log('formData', values)

        setIsFetching(true)
        setTimeout(() => {
            onSubmitProps.setSubmitting(false)
            onSubmitProps.resetForm()
            setIsFetching(false)
            setPopupMode(true)
        }, 2000)

    };

    const SignupSchema = Yup.object().shape({
          formName3: Yup.string()
          .min(2, 'Too Short!')
          .max(10, 'Too Long!')
          .required('Required'),
      });

      const validate = values => {
        const errors = {};
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

      
        return errors;
      };


    return (
        <div className={cl.form_container}>
            <div className={cl.loginBox}>
                <div className={cl.avatar}>
                    <img src={avatar} alt="" />
                </div>

                <h2 className={cl.loginBox__title}>Please fill up Register form</h2>

                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={SignupSchema}
                    // validate={validate}
                    validateOnChange={true}
                    validateOnBlur={true}
                >
                    {(formik) => {
                    console.log('formik', formik)

                    return (
                        <Form >
                            <div className={cl.inputWrapper}>
                                <label htmlFor="email">email</label>
                                <Field as="input" name="email" className="formName2" placeholder="Enter name" />
                                <ErrorMessage name="email" component={ErrorText} />
                                {/* <ErrorMessage>
                                    {(errorMsg)=><div className={cl.error}>{errorMsg}</div>}
                                    {/* easy displaying errormessage */}
                                {/* </ErrorMessage> */}

                            </div>
                            <div className={cl.inputWrapper}>
                                <label htmlFor="formName3">NAME3</label>
                                <Field name="formName3" >
                                    {
                                        ({ field, form, meta }) => {
                                            return <input {...field} type="text" id="formName3" placeholder="Enter name" />
                                        }
                                    }
                                </Field>
                            </div>


                            {/* <div className={cl.formControl}>
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
                            </div> */}
                            <div className={cl.inputWrapper}>
                                <label htmlFor='facebook' >Facebook</label>
                                <Field type="text" name="social.fb" id="facebook" placeholder="Your social" validate={inputValidation} />
                            </div>
                            <div className={cl.inputWrapper}>
                                <label htmlFor='phone1' >tel1</label>
                                <Field type="tel" name="phoneNumber[0]" id="phone1" validate={inputValidation} />
                            </div>
                            <div className={cl.inputWrapper}>
                                <label htmlFor='phone2' >tel2</label>
                                <Field type="tel" name="phoneNumber[1]" id="phone2" validate={inputValidation} />
                            </div>
                            <div className={cl.inputWrapper}>
                                <label htmlFor="">List of Numbers</label>
                                <FieldArray name='phNumbers'>
                                    {
                                        (fieldArrayProp) => {
                                            const { push, remove, form } = fieldArrayProp;
                                            const { values } = form;
                                            const { phNumbers } = values
                                            return (
                                                <div>
                                                    {
                                                        phNumbers.map((number, index) => {
                                                            let buttonStyle = {display: "inline-block", border: "1px solid #000", background:"white", width: "20px", height: "20px"}
                                                            return (
                                                                <div key={index}>
                                                                    <Field name={`phNumbers[${index}]`} />
                                                                    {phNumbers.length > 1 && 
                                                                    <span style={buttonStyle}  onClick={() => remove(index)}> - </span>
                                                                    }
                                                                    
                                                                    <span style={buttonStyle} onClick={() => push('')}> + </span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        }
                                    }
                                </FieldArray>

                            </div>

                            <button type='submit' disabled={formik.isSubmitting}>{isFetching ? <span><img src={spinner} alt="" /></span> : <span>Register</span>}</button>

                        </Form>
                    )}
                    }

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