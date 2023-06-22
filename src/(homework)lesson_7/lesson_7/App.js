import React, { useState } from "react";
import Form from "./form/Form";
import PostList from "./post/PostList";
import s from './App.module.css'
import MyButton from "./post/MyButton";

const App = () => {
    const [helo, setHelo] = useState(0)
    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            text: 'Learn js',
            isComplited: false
        },
        {
            id: Math.random(),
            text: 'Learn React js',
            isComplited: false
        },
        {
            id: Math.random(),
            text: 'Learn Node js',
            isComplited: false
        }
    ])
    const dataMania = (data) => {
        setHelo(data)
    }
    const createPost = (newPost) => {
        setTodos([...todos, newPost]);
    }
    const removePost = (post) => {
        setTodos(todos.filter(p =>  p.id !== post.id))
    }

    const clearPosts = () => {
        setHelo(0)
        setTodos([])
    }
    return (
        <div>
            <Form create={createPost} />
            <PostList posts={todos} func={dataMania} remove={removePost} />
            <div className={s.count}>
                <span>{helo}/{todos.length}</span>
                <MyButton name={'Clear'} onClick={clearPosts} />
            </div>
        </div>
    )
}

export default App;