import React from 'react';
import store, {StateType} from './Redux/state'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree(store.getStore());

store.subscribe(rerenderEntireTree)