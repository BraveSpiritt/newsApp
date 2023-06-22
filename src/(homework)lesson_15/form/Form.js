import React, { useState } from 'react'
import s from './Form.module.css'
import MyButton from '../post/MyButton'

const Form = ({ onAdd }) => {

    const [input, inputState] = useState('')

    const addNewPost = (e) => {
        e.preventDefault();
        onAdd(input)
        inputState('')
    }

    return (
        <div className={s.divik}>
            <form className={s.formik}>
                <input type='text' placeholder='Todo post' value={input} className={s.inputik} onChange={e => inputState(e.target.value)} />
                <MyButton name={'Add'} onClick={addNewPost}></MyButton>
            </form>
        </div>
    )
}

export default Form;