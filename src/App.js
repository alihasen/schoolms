import React from 'react';
import Login from './features/login';
import Hello from './features/login/components/Hello';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

const App = ({ store }) => (
    <Provider store={store}>
        <div>
            <Route exact = {true} path="/" component={Login} />
            <Route path="/main"
                    component={Hello} />
        </div>
    </Provider>
)


export default App