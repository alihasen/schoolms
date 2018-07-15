import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import reducer from './shared/reducers';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'
// testing
const middlewares = [thunk];

const store = createStore(reducer, applyMiddleware(...middlewares));

store.subscribe(() => {
    console.log(store.getState());
})

render(
    <Router>
        <App store={store} />
    </Router>,
    document.getElementById('root')
)
