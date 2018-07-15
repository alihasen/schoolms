import React from 'react';

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
                <input type="text" placeholder="username" value={this.state.user} onChange={this.handleUserChange} />
                <br />
                <br />
                <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} />
                <br />
                <br />
                <button onClick={this.handleSubmitClick}>Submit</button>
            </div>
        )
    }
}

export default Login;