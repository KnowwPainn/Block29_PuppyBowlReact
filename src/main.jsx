// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';

import App from "./App";

import "./styles.css";

const hold = () => {
    return (
        <BrowserRouter>
            {/* <Routes>
                <Route path='/' element={<AllPlayers />} />
                <Route path='/players/:id' element={<SinglePlayer />} />
            </Routes> */}
            <App />
        </BrowserRouter>
    );
};

ReactDOM.render(<hold />, document.getElementById('root'));

//cd "/Users/ethanh/Documents/FullStack Coursework/Block29_PuppyBowlReact"
