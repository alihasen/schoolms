import api from '../../shared/api';

const loginSuccess = (data) => ({
    type: "LOGIN_SUCCESS",
    data
})

export const login = (username, password) => dispatch => {
    var body = { "username": username, "password": password };
    api.login(body, response => {
        dispatch(loginSuccess(response.data))
        window.location.hash = "/main";
    })
}