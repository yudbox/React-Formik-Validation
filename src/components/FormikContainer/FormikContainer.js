import React from 'react';
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../common/FotmikControl/FormikControl';


const FormikContainer = () => {

    const selectOptions = [
        {key: 'Select an option', value: ''},
        {key: 'This option 1', value: 'option1'},
        {key: 'This option 2', value: 'option2'},
        {key: 'This option 3', value: 'option3'},
    ]

    const radioOptions = [
        {key: 'This option 1', value: 'option1'},
        {key: 'This option 2', value: 'option2'},
        {key: 'This option 3', value: 'option3'},
    ]

    const checkboxOptions = [
        {key: 'This option 1', value: 'choption1'},
        {key: 'This option 2', value: 'choption2'},
        {key: 'This option 3', value: 'choption3'},
    ]

    const initialValues = {
        firstName: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: null

    }
    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required'),
        birthDate: Yup.date().required('Required').nullable(),
        
    })
    const onSubmit = values => {
        console.log('values', values)
        console.log('Save data', JSON.parse(JSON.stringify(values)))
    }

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            {
                formik=>{
                    return (
                        <Form>
                            <FormikControl 
                            control='input' 
                            label='My first name' 
                            name='firstName' 
                            placeholder='enter name'  />

                            <FormikControl 
                            control='textarea' 
                            label='Textarea topic' 
                            name='description' 
                            placeholder='Your description'  />

                            <FormikControl 
                            control='select' 
                            label='Select topic' 
                            name='selectOption'
                            options={selectOptions}  />

                            <FormikControl 
                            control='radio' 
                            label='Radio topic' 
                            name='radioOption'
                            options={radioOptions}   />

                            <FormikControl 
                            control='checkbox' 
                            label='Checkbox topic' 
                            name='checkboxOption'
                            options={checkboxOptions}   />

                            <FormikControl 
                            control='date' 
                            label='Pick a date' 
                            name='birthDate'  />

                            <button type='submit'>Send</button>
                        </Form>
                    )
                }
            }

        </Formik>
        
    );
}

export default FormikContainer;