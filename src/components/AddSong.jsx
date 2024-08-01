import React, { useState } from 'react';
import { Form, Input, Button } from './StyledComponents';
import { createSong } from '../api/songs';

const AddSong = () => {
    const [song, setSong] = useState({
        name: '',
        artist: '',
        album: '',
        time: '',
        is_favorite: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSong((prevSong) => ({
            ...prevSong,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createSong(song);
        setSong({
            name: '',
            artist: '',
            album: '',
            time: '',
            is_favorite: false,
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Add Song</h1>
            <Input type="text" name="name" value={song.name} onChange={handleChange} placeholder="Name" required />
            <Input type="text" name="artist" value={song.artist} onChange={handleChange} placeholder="Artist" required />
            <Input type="text" name="album" value={song.album} onChange={handleChange} placeholder="Album" />
            <Input type="text" name="time" value={song.time} onChange={handleChange} placeholder="Time" />
            <label>
                Favorite:
                <Input type="checkbox" name="is_favorite" checked={song.is_favorite} onChange={handleChange} />
            </label>
            <Button type="submit">Add Song</Button>
        </Form>
    );
};

export default AddSong;
