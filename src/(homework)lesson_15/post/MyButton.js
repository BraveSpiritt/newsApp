import React from 'react';
import s from '../form/Form.module.css'

const MyButton = ({onDelete, name, ...props}) => {
    return (<div>
        <button {...props} type='submit' className={s.buttonik}>{name}</button>
    </div>);
}


export default MyButton;