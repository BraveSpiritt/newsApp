import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [title, setTitle] = useState('');
    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        if (searchText === '' || searchText > 10 || searchText < 1) {
            setTitle('Pealse enter the number through 1 to 10')
        } else {
            fetch(`https://jsonplaceholder.typicode.com/users/${searchText}`)
                .then((response) => response.json())
                .then((response) => JSON.stringify(response))
                .then((response) => setTitle(response))
        }
    }, [searchText])

    const getData = (searchValue) => {
        setSearchText(searchValue.target.value);
    }

    return (
        <div>
            <input type='text' value={searchText} onChange={getData} />
            <h1>{title}</h1>
        </div>
    )
}

export default App;
