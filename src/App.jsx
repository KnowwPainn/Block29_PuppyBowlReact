// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NavBar from './components/NavBar';
import NewPlayerForm from './components/NewPlayerForm';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Routes>
                    <Route path='/' element={<AllPlayers />} />
                    <Route path='/players/:id' element={<SinglePlayer />} />
                    <Route path='/new' element={<NewPlayerForm />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;