// components/NewPlayerForm.jsx
import React, { useState } from 'react';
import { createPlayer } from '..';
import { useNavigate } from 'react-router';

const NewPlayerForm = () => {
    const navigate = useNavigate();
    const [newPlayer, setNewPlayer] = useState({ name: '', breed: '' });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPlayer((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createdPlayer = await createPlayer(newPlayer);
        if (createdPlayer) {
            navigate(`/players/${createdPlayer.data.newPlayer.id}`);
        } else {
            alert('Error creating player.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a new Player</h2>
            <label>
                Name:
                <input type='text' name='name' value={newPlayer.name} onChange={handleChange} />
            </label>
            <label>
                Breed:
                <input type='text' name='breed' value={newPlayer.breed} onChange={handleChange} />
            </label>
            <label>
                Team ID:
                <input type='number' name='teamId' value={newPlayer.teamId} onChange={handleChange} />
            </label>
            <button type='submit'>Add Player</button>
        </form>
    );
};

export default NewPlayerForm;