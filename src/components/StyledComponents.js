import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    font-family: 'Arial', sans-serif;
`;

export const Header = styled.header`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
`;

export const Input = styled.input`
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    font-size: 1rem;
`;

export const Button = styled.button`
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #1e90ff;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #1c7ed6;
    }
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const ListItem = styled.li`
    background-color: rgba(255, 255, 255, 0.1);
    margin: 0.5rem 0;
    padding: 0.5rem;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
