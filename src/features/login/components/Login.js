import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "user": "",
            "password": ""
        };
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    handlePasswordChange(e) {
        this.setState({ "password": e.target.value });
    }

    handleUserChange(e) {
        this.setState({ "user": e.target.value });
    }

    handleSubmitClick() {
        this.props.submit(this.state.user, this.state.password);
    }

    render() {
        return (
            <div>
                <TextField
                    label="UserName"
                    value={this.state.user}
                    onChange={this.handleUserChange}
                    margin="normal"
                />
                <br />
                <TextField
                    label="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    margin="normal"
                />
                <br />
                <Button variant="contained" size="large" color="primary" onClick={this.handleSubmitClick}>
                    Submit
                </Button>
            </div>
        )
    }
}

export default Login;