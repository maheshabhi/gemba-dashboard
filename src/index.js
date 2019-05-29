import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';


import { createStore } from 'redux'
import { Provider } from "react-redux";
import addProject from './components/reducers/addProject';

let store = createStore(addProject);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));


