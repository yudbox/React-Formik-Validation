import React from 'react';
import InputField from './InputField'
import TextareaField from './TextareaField';
import SelectField from './SelectField';
import RadioButtons from './RadioButtons';
import CheckboxGroup from './CheckboxGroup';
import DatePickerBox from './DatePickerBox';

const FormikControl = ({control, ...props}) => {
   switch(control) {
       case 'input': return <InputField {...props} />
       case 'textarea': return <TextareaField {...props} />
       case 'select': return <SelectField {...props} />
       case 'radio': return <RadioButtons {...props} />
       case 'checkbox': return <CheckboxGroup {...props} />
       case 'date': return <DatePickerBox {...props} />
           default: return null
   }
}

export default FormikControl;