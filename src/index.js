import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './App'
import './index.css'


const initState = {
    projects: [
        { id: 1, title: 'project1', description: '', img: '' },
        { id: 2, title: 'project2', description: '', img: '' },
        { id: 3, title: 'project3', description: '', img: '' },
        { id: 4, title: 'project4', description: '', img: '' }
    ]
}

const myReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_PROJECT":
            return state;
        default:
            return state;
    }
}

const store = createStore(myReducer, devToolsEnhancer())

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))