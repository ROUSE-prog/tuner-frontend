import axios from 'axios';

const apiUrl = 'http://localhost:3000/songs';

export const getAllSongs = async () => {
    const response = await axios.get(apiUrl);
    return response.data;
};

export const getSongById = async (id) => {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
};

export const createSong = async (song) => {
    const response = await axios.post(apiUrl, song);
    return response.data;
};

export const updateSong = async (id, song) => {
    const response = await axios.put(`${apiUrl}/${id}`, song);
    return response.data;
};

export const deleteSong = async (id) => {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
};
