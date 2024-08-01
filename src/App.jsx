import React from 'react';
import './App.css';
import { Container, Header } from './components/StyledComponents';
import SongList from './components/SongList';
import AddSong from './components/AddSong';

function App() {
    return (
        <Container>
            <Header>Tuner</Header>
            <AddSong />
            <SongList />
        </Container>
    );
}

export default App;
