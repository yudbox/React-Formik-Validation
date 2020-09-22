import React from 'react';
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../common/FotmikControl/FormikControl';

const RegistratiomForm2 = () => {

    const radioOptions = [
        {key: 'Email', value: 'emailmoc'},
        {key: 'Teleophone', value: 'telephonemoc'},  // moc - mode of contact
     ]

     const initialValues = {
        userEmail: '',
        userPassword: '',
         confirmPassword: '',
         modeOfContact: '',
         phone: ''
     }

     const validationSchema=Yup.object({
        userEmail: Yup.string().email('Invalid email format').required('Required'),
        userPassword: Yup.string().required('Required'),
         confirmPassword: Yup.string()
            .oneOf([Yup.ref('userPassword'), ''], 'Password must match')
            .required('Required'),
         modeOfContact: Yup.string().required('Required'),
         phone: Yup.string().when('modeOfContact', {
             is: 'telephonemoc',
             then: Yup.string().required('Required')
         })
     })

     const onSubmit = values => {
         console.log('values', values);
     }

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            {
                formik=> {
                    return(
                        <Form>
                            <FormikControl 
                            control='input'
                            type='email' 
                            label='My Email' 
                            name='userEmail' 
                            placeholder='enter your email'
                              />

                            <FormikControl 
                            control='input'
                            type='password' 
                            label='My Password' 
                            name='userPassword' 
                            placeholder='enter your password'
                              />

                            <FormikControl 
                            control='input'
                            type='password' 
                            label='Confirm password' 
                            name='confirmPassword' 
                            placeholder='Confirm your email'
                              />

                            <FormikControl 
                            control='radio'
                            label='Choose a contact type' 
                            name='modeOfContact' 
                            options={radioOptions}
                              />

                            <FormikControl 
                            control='input'
                            type='text' 
                            label='Phone number' 
                            name='phone' 
                            placeholder='Your phone'
                              />

                              <button type='submit' 
                              disabled={!formik.isValid}>Send</button>

                        </Form>  
                        )
                }
            }
        </Formik>
        
    );
}

export default RegistratiomForm2;
