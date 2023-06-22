import { useState, useEffect } from 'react';
import s from './App.module.css';

function App() {
    const [title, setTitle] = useState('');
    const [videoSrc, setVideoSrc] = useState('');
    const [searchText, setSearchText] = useState('');



    const getData = (searchValue) => {
        setSearchText(searchValue.target.value);
    }

    useEffect(() => {
        if (searchText === '') {
            setTitle('Please type anything');

        } else {
            setTitle('');
            const debounce = setTimeout(() => {
                fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCk7ew70cvuALoq3j5-S9cERHIbX7erezw&maxResults=7&q=${searchText}`)
                    .then(response => response.json())
                    .then(response => setVideoSrc(response.items[1].id.videoId))
                    .then(() => console.log(videoSrc))
            }, 1000)
            return (() => {
                clearTimeout(debounce)
            });
        }
    }, [searchText])
    
    return (
        <div className={s.djangoPaxan}>
            <div className={s.django}>
                <input className={s.merInput} type='text' value={searchText} onChange={getData} />
                <h1 className={s.merVernagir}>{title}</h1>
                <iframe className={s.merIframe} src={`https://www.youtube.com/embed/${videoSrc}`} />
            </div>
        </div>
    )
}

export default App;
