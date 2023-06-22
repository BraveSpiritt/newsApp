import React, { useState } from 'react'
import s from './Form.module.css'
import MyButton from '../post/MyButton'

const Form = ({create}) => {
   
    const [input, inputState] = useState('')

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Math.random(),
            text: input,
            isComplited: false
        }
        create(newPost)
        inputState('')
    }

    return (
        <div className={s.divik}>
            <input type='text' placeholder='Todo post' value={input} className={s.inputik} onChange={e => inputState(e.target.value)} />
            <MyButton name={'Add'} onClick={addNewPost}></MyButton>
        </div>
    )
}


export default Form;