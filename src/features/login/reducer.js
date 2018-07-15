const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { ...state, "data": action.data }
        case "LOGIN_FAILURE":
            return { ...state, "login": "failed" }
    }
    return state;
}

export default loginReducer