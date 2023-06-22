import { useState, useEffect } from 'react';
import s from './Placeholder.module.css'

function App() {
    const [title, setTitle] = useState();
    const [searchText, setSearchText] = useState('');
    const [help, setHelp] = useState('');


    useEffect(() => {
        if (searchText === '' || searchText > 10 || searchText < 1) {
            setTitle('Please enter the number through 1 to 10')
            setHelp('')
        } else {
            setTitle('')
            fetch(`https://jsonplaceholder.typicode.com/users/${searchText}`)
                .then(response => response.json())
                .then(response => setHelp(response))
        }
    }, [searchText])


    let array = [];

    if (help.length !== 0) {
        const arr = [help]
        array = arr.map(help => {
            return (
                <div className={s.tyazadiv} key={help.id}>
                    <ul>
                        <li>ID : {help.id}</li>
                        <li>Name : {help.name}</li>
                        <li>Username : {help.username}</li>
                        <li>City : {help.address.city}</li>
                        <li>Street : {help.address.street}</li>
                        <li>Suite : {help.address.suite}</li>
                        <li>Zipcode : {help.address.zipcode}</li>
                        <li>Phone : {help.phone}</li>
                        <li>Username : {help.username}</li>
                        <li>Website : {help.website}</li>
                    </ul>
                </div>
            )
        })

    }

    const getData = (searchValue) => {
        setSearchText(searchValue.target.value);
    }

    return (
        <div className={s.main}>
            <input className={s.merInput} type='text' value={searchText} onChange={getData} />
            <h1 className={s.title}>{title}</h1>
            <div className={s.information}>{array}</div>
        </div>
    )
}

export default App;
