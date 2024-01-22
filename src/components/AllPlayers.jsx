// components/AllPlayers.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlayers } from '..';

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPlayers();
                setPlayers(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching players:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    // Check if players is an array
    if (!Array.isArray(players)) {
        console.error('Players data is not an array:', players);
        return <p>Error loading players data.</p>;
    }

    // Check if players array is empty
    if (players.length === 0) {
        return <p>No players available.</p>;
    }

    return (
        <div>
            <h2>All Players</h2>
            {players.map((player) => (
                <div key={player.id}>
                    
                    <h4>{player.name}</h4>
                    <img src={player.imageUrl} height="50px" width="50px"/>
                    <Link to={`/players/${player.id}`}>See Details</Link>
                </div>
            ))}
        </div>
    );
};

export default AllPlayers;