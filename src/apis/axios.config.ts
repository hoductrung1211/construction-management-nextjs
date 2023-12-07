import originAxios from 'axios';

const axios = originAxios.create({
    baseURL: "http://localhost:8080/api/", // change this
});
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.timeout = 5000;

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');

    if (token !== undefined && token)
        config.headers.Authorization = 'Bearer ' + token;

    return config;
});

export default axios;

export interface IErrorResponse {
    errorMessages: string[]
}
