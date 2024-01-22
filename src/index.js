// API/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players';

const fetchPlayers = async () => {
    try {
        const response = await fetch(API_URL);
        const result = await response.json();

        // Check if 'data.players' property exists and is an array
        if (result && result.data && Array.isArray(result.data.players)) {
            return result.data.players;
        } else {
            console.error('Invalid players data format:', result);
            return [];
        }
    } catch (error) {
        console.error('Error fetching players:', error);
        return [];
    }
};


const createPlayer = async (newPlayer) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPlayer),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating player:', error);
        return null;
    }
};

const deletePlayer = async (playerId) => {
    try {
        const response = await fetch(`${API_URL}/${playerId}`, {
            method: 'DELETE',
        });
        return response.ok;
    } catch (error) {
        console.error('Error deleting player:', error);
        return false;
    }
};

export { fetchPlayers, createPlayer, deletePlayer };