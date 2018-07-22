import api from "../api/api";

export default {
  login: (body, callback) => {

    // verify the required parameter 'body' is set
    if (body == undefined || body == null) {
      throw "Missing the required parameter 'body' when calling login";
    }else {
      body = JSON.stringify(body)
    }

    return api.post(
      "/login",
      body,
      callback
    );
  }
}