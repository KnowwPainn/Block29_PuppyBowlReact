// components/SinglePlayer.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { deletePlayer } from '..'; // Import only deletePlayer since we are using fetch function directly

const SinglePlayer = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/${id}`);
                const selectedPlayer = await response.json();
                // console.log(selectedPlayer);
                // console.log(response);
                if (response.ok) {
                    // console.log("here")
                    setPlayer(selectedPlayer.data.player); //Updated this to grab the player field from the json object
                } else {
                    console.error('Error fetching player by ID:', selectedPlayer);
                }
            } catch (error) {
                console.error('Error fetching player by ID:', error);
            }
        };

        fetchData();
    }, [id]);

    // console.log(player)

    const handleDelete = async () => {
        try {
            const success = await deletePlayer(id);
            if (success) {
                navigate('/'); // Use navigate instead of history.push
            } else {
                alert('Error deleting player.');
            }
        } catch (error) {
            console.error('Error deleting player:', error);
            alert('Error deleting player.');
        }
    };

    return (
        <div>
            <h2>Player Details</h2>
            {player && (
                <div>
                    <img src={player.imageUrl} width="500" height="600" alt="Player" />
                    <h4>{player.name}</h4>
                    <p>Breed: {player.breed}</p>
                    <p>Team: {player.teamId}</p>
                    <button onClick={handleDelete}>Delete Player</button>
                </div>
            )}
            <Link to='/'>Back to All Players</Link>
        </div>
    );
};

export default SinglePlayer;