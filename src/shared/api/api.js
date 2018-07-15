import axios from 'axios';

const TIMEOUT = { "timeout": 0 };

export default {
    get: (url, body, cb, timeout) =>
        axios.get(url, body, timeout || TIMEOUT)
            .then(function (response) {
                cb(response);
            })
            .catch(function (error) {
                cb(error);
            }),
    post: (url, body, cb, timeout) =>
        axios.post(url, body, timeout || TIMEOUT)
            .then(function (response) {
                cb(response);
            })
            .catch(function (error) {
                cb(error);
            })
}