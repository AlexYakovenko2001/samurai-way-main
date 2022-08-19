import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App, {StatePropsType} from './App';
import {addPost} from './Redux/state';
import React from 'react';

export const rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root')
    );
}