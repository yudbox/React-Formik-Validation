import React from 'react';
import cl from './ButtonSubmit.module.css'


const ButtonSubmit = (props) => {
    return (<>
        <button className={cl.button_submit} >{props.name}</button>
   </> );
}

export default ButtonSubmit;