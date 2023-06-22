import React from 'react';
import axios from 'axios';
import useRequest from './hooks/useRequest';
import MouseCordination from './components/MouseCordination';

function App() {
    // const [todos, loading, error] = useRequest(fetchTodos)
    // function fetchTodos() {
    //    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
          
    // }

    // if(loading) {
    //     return <h1>Идет загрузка...</h1>
    // }
    
    // if(error) {
    //     return <h1>Произошла ошибка при загрузке данных</h1>
    // }

    return (
        <div>
            {/* {todos && todos.map(todo =>
                <div key={todo.id} style={{ padding: '5px', border: '3px solid black' }}>
                    {todo.id}.{todo.title}
                </div>
            )} */}
            <MouseCordination/>
        </div>

    )
}


export default App;