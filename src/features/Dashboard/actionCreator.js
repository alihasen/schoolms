import api from '../../shared/api';

const loginSuccess = (data, username="") => ({
    type: "LOGIN_SUCCESS",
    data,
    username
})

export const login = (username, password) => dispatch => {
    var body = { "username": username, "password": password };
    api.login(body, response => {
        if(response.data === "success"){
            dispatch(loginSuccess(response.data, username))
            window.location.hash = "/main";
        } else {
            alert("Invalid username/password")
        }
    })
}