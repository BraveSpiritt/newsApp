import React, { useReducer, useState } from "react";
import Form from "./form/Form";
import PostList from "./post/PostList";
import MyButton from "./post/MyButton";
import Footer from "./footer/footer";

function reducer(state, action) {
    if (action.type === 'add') {
        return [
            ...state,
            {
                id: Math.random(),
                text: action.text,
                isComplited: false
            }
        ]
    }
    if (action.type === 'remove') {
        return state.filter(e => e.id !== action.id)
    }
    if (action.type === 'clear') {
        return state.filter(e => e.isComplited !== action.isComplete)
    }
    if (action.type === 'changning') {
        return state.filter((p) => {
            if (p.id === action.id) {
                p.isComplited = !action.isComplited
            }
            return state
        })
    }

}

const App = () => {
    const [todos, dispatch] = useReducer(reducer, [
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
    return (
        <div>
            <Form onAdd={(text) => {
                dispatch({
                    type: 'add',
                    text: text
                })
            }} />
            <PostList posts={todos}
                onRemove={(id) => {
                    dispatch({
                        type: 'remove',
                        id: id
                    })
                }} isComplitedChange={(post) => {
                    dispatch({
                        type: 'changning',
                        id: post.id,
                        isComplited: post.isComplited
                    })
                }} />
            <div style={{ marginTop: '50px', width: '500px', display: 'flex', justifyContent: 'space-between' }}>
                <Footer todos={todos} />
                <MyButton name={'Clear'} onClick={() => {
                    dispatch({
                        type: 'clear',
                        isComplete: false,
                    })
                }} />
            </div>
        </div>
    )
}

export default App;