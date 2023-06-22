import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About'
import Store from './store/Store'
import Products from './products/Products'
import Header from './Header'
import Footer from './Footer';






const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/store' element={<Store />} />
                    <Route path='/products' element={<Products />} />
                </Routes>
                <Footer />
            </BrowserRouter >
        </>

    )
}


export default App;
