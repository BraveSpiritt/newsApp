import { useState, useEffect, createElement } from 'react';
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
            setVideoSrc('');
        } else {
            setTitle('');
            const debounce = setTimeout(() => {
                fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDhHpikApA6Ecb7dKgLhgQsFLfGQUYj3Zs&maxResults=20&q=${searchText}`)
                    .then(response => response.json())
                    .then(response => setVideoSrc(response))
            }, 1000)
            return (() => {
                clearTimeout(debounce)
            });
        }

    }, [searchText])

    let items = [];
    if (videoSrc.length !== 0) {
        const arr = videoSrc.items
        items = arr.map((item) => {
            return (<div className={s.tyazadiv}>
                <img className={s.merIframe} src={item.snippet.thumbnails.high.url} />
                <a className={s.orish} href={`https://www.youtube.com/embed/${item.id.videoId}`}>{item.snippet.title}</a>
                <h1 className={s.bacatrel}>Description: {item.snippet.description} </h1>
            </div>)
        })
    }

    return (
        <div className={s.djangoPaxan}>
            <div className={s.django}>
                <input className={s.merInput} type='text' value={searchText} onChange={getData} />
                <h1 className={s.merVernagir}>{title}</h1>
            </div>
            <div className={s.merDzivenHary}>{items}</div>
        </div>
    )
}

export default App;
