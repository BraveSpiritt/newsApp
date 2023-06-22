import React from "react";
import { useState, useEffect, useRef } from "react";
import useScroll from "../hooks/useScroll";
const List = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 20;
    const parentRef = useRef();
    const childRef = useRef();
    const intersected = useScroll(parentRef, childRef, () =>  fetchTodods(page, limit));
    function fetchTodods (page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json])
                setPage(prev => prev + 1);
            })
    }


    return (
        <div ref={parentRef} style={{height: '300px', overflow: 'auto'}}>
            {todos.map(todo =>
                <div key={todo.id} style={{ padding: '5px', border: '3px solid black' }}>
                    {todo.id}.{todo.title}
                </div>
            )}
            <div ref={childRef} style={{height: '20px', backgroundColor: 'green'}}/>
        </div>
    )
}


export default List; 