const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { ...state, "data": action.data, "username": action.username }
    }
    return state;
}

export default loginReducer