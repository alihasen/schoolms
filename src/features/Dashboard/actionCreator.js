import api from '../../shared/api';

/* const loginSuccess = (data, username="") => ({
    type: "LOGIN_SUCCESS",
    data,
    username
})
 */
export const addStudent = (data) => dispatch => {
    console.log(data)
    api.addStudent(data, response => {
        if(response.data === "success"){
            // dispatch(loginSuccess(response.data, username))
            alert("data saved");
        } else {
            alert("failed")
        }
    })
}