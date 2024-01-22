// App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NavBar from './components/NavBar';
import NewPlayerForm from './components/NewPlayerForm';

// import "./styles.css";


const App = () => {
    return (
        <div id="container">
            <div id="navbar">
                {/* <NavBar /> */}
                <Link to='/'>Home</Link>
                <Link to='/new'>New Player</Link>
            </div>
            <div>
                <Routes>
                    <Route path='/' element={<AllPlayers />} />
                    <Route path='/players/:id' element={<SinglePlayer />} />
                    <Route path='/new' element={<NewPlayerForm />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;