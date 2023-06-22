import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './samurai_road/App';
// import App from './redux-Red-Group/components/App'
// import state from './samurai_road/components/redux/state'
import { Provider } from 'react-redux';
import LatestNews from './redux-saga-webDev/pages/latest-news/latest-news';
import PopularNews from './redux-saga-webDev/pages/popular-news/popular-news';
import Home from './redux-saga-webDev/pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import store from './redux-Red-Group/sotre/store';
import store from './redux-saga-webDev/redux/store'
import App from './redux-saga-webDev/App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App state={state}/> */}
    <Provider store={store}>
      <BrowserRouter >
        <App >
          <Routes>
            <Route index path='/' element={<Home/>} />
            <Route path='/latest-news' element={<LatestNews/>} />
            <Route path='/popular-news' element={<PopularNews/>} />
          </Routes>
        </App>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>
);


