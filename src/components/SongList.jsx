import React, { useState, useEffect } from 'react';
import { List, ListItem } from './StyledComponents';
import { getAllSongs } from '../api/songs';

const SongList = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const data = await getAllSongs();
            setSongs(data);
        };

        fetchSongs();
    }, []);

    return (
        <div>
            <h1>Song List</h1>
            <List>
                {songs.map((song) => (
                    <ListItem key={song.id}>
                        {song.name} by {song.artist}
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default SongList;
