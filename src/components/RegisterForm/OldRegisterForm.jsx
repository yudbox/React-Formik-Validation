import React from 'react'
import avatar from '../../image/avatar.png'
import cl from './RegisterForm.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {

    const initialValues = {
        formName: '',
        formSurname: '',
        formCity: '',
        formPhone: '',
    }

    const onSubmit = values => {
        console.log('formData', values)
    }

    const validate = values => {
        let errors = {}

        if (!values.formName) {
            errors.formName = 'This field is required'
        }

        if (!values.formSurname) {
            errors.formSurname = 'This field is required'
        }

        if (!values.formPhone) {
            errors.formPhone = 'This field is required'
        }

        return errors
    }
    
    const validateSchema = Yup.object({
        formName: Yup.string().required('This field is required111'),
        formSurname: Yup.string().required('This field is required'),
        formCity: Yup.string().required('yoyoyoy') ,
        formPhone: Yup.string().required('This field is required'),
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validateSchema
    })

    console.log('Values', formik)
    return (
        <div className={cl.form_container}>
            <div className={cl.loginBox}>
                <img src={avatar} alt="" className={cl.avatar} />
                <h2 className={cl.loginBox__title}>Please fill up Register form</h2>

                    <form onSubmit={formik.handleSubmit}>

                        <label htmlFor='formName' >Name</label>
                        <input type="text" name="formName" placeholder="Enter name"
                            //  handleChange make controled input and allows take a value every changing
                            onChange={formik.handleChange} value={formik.values.formName}
                            //handleBlur  add touched attribute to the formName
                            onBlur={formik.handleBlur} />
                        {formik.touched.formName && formik.errors.formName ? <div>{formik.errors.formName}</div> : null}

                        <label htmlFor='formSurname' >Surname</label>
                        <input type="text" name="formSurname" placeholder="Enter surname"
                            {...formik.getFieldProps('formSurname')}
                        />

                        <label htmlFor='formCity' >Your city</label>
                        <input type="text" name="formCity" placeholder="Enter your city"
                            onChange={formik.handleChange} value={formik.values.formCity}
                            onBlur={formik.handleBlur} />

                        <label htmlFor='formPhone' >Phone</label>
                        <input type="tel" name="formPhone" placeholder="Enter phone number"
                            onChange={formik.handleChange} value={formik.values.formPhone} />

                        <button>Register</button>

                    </form>
            </div>
        </div>
    )
}

export default RegisterForm;