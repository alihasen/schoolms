import React from 'react';
import Login from './features/login';
import Dashboard from './features/Dashboard/components/';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

const App = ({ store }) => (
    <Provider store={store}>
        <div>
            <Route exact={true} path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </div>
    </Provider>
)


export default App