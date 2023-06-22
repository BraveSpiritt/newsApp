import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {

    

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/*" element={<Profile post={props.state.profilePage} />} />
                        <Route path="/dialogs/*" element={<Dialogs dialog={props.state.messagePage} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App; 