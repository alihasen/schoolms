import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { login } from '../actionCreator';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(username, passsword) {
        this.props.dispatch(login(username, passsword));
    }

    render() {
        return (
            <Login submit={this.submit} />
        )
    }
}



export default connect()(LoginContainer)