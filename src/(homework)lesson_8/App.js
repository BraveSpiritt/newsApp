import React, { useEffect, useState } from "react";
import Form from "./form/Form";
import PostList from "./post/PostList";
import MyButton from "./post/MyButton";
import Footer from "./footer/Footer";

const App = () => {

    const getUser = () => Promise.resolve({ id: 1, name: 'Yevhen' });
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
    const createPost = (newPost) => {
        setTodos([...todos, newPost]);
    }
    const removePost = (post) => {
        setTodos(todos.filter(p => p.id !== post.id))
    }
    const isComplitedChange = (post) => {
        setTodos(todos.filter(p => {
            if (p.id === post.id) {
                p.isComplited = !post.isComplited
            }
            return [...todos]
        }))
    }
    const clearPosts = () => {
        setTodos([])
    }
    const [user, setUser] = useState("");

    useEffect(() => {
        const loadUser = async () => {
            const user = await getUser();
            setUser(user);
        }
        loadUser();
    }, [])


    return (
        <div>
            {user && <h2>Logged in as {user.name}</h2>}
            <a>searches for</a>
            <Form create={createPost} />
            <PostList posts={todos} remove={removePost} isComplitedChange={isComplitedChange} />
            <Footer todos={todos} />
            <MyButton name={'Clear'} onClick={clearPosts} />
        </div>
    )
}

export default App;