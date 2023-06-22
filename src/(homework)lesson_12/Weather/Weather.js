import React from "react";
import { useState, useEffect } from 'react';
import s from './Weather.module.css';

const Weather = () => {
    const [searchText, setSearchText] = useState('');
    const [title, setTitle] = useState('');


    const getData = (searchValue) => {
        setSearchText(searchValue.target.value);
    }

    useEffect(() => {
        if (searchText === '') {
            setTitle('Please type city name');
        } else {
            setTitle('');
            const debounce = setTimeout(() => {
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=a84f629b04d3d2e7cc6d3d223c362fcd`).then(response => response.json())
                    .then((response) => {
                        try {
                            setTitle(`In ${response.name} currently ${response.main.temp} °C`)
                        } catch {
                            setTitle('Wrong city name')
                        }
                    })
            }, 1000)
            return (() => {
                clearTimeout(debounce)
            });
        }

    }, [searchText])


    return (
        <div className={s.django}>
            <input className={s.merInput} type='text' value={searchText} onChange={getData} />
            <h1 className={s.merVernagir}>{title}</h1>
        </div>
    )
}


export default Weather;