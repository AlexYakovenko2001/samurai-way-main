import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const dialogs = [
    {id: 1, name: 'Maks'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Nastya'},
    {id: 4, name: 'Kostya'},
    {id: 5, name: 'Katya'}
]
const messages = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What are you doing?'},
]
const posts = [
    {id: 1, message: 'Hi! How are you?', likesCount: 0},
    {id: 2, message: 'It\'s my first post', likesCount: 23}
]


ReactDOM.render(
    <App messages={messages}
         dialogs={dialogs}
         posts={posts}
    />,
  document.getElementById('root')
);