import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App, {StatePropsType} from './App';
import {addPost, updateNewPostText} from './Redux/state';
import React from 'react';

export const rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root')
    );
}