import axios from 'axios';

const API_SERVICE=axios.create({
    baseURL: 'http://localhost:8080', // api base_url
    timeout: 120000, // request timeout,
});

API_SERVICE.interceptors.request.use(
    req => {
        // req.headers['Authorization'] ='Bearer ' + store.state.user.user_token;
        return req
    },
    error => {
        // Do something with request error
        return Promise.reject(error)
    }
);

export default API_SERVICE