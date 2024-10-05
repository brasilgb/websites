import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export const apiweb = axios.create({
    // baseURL: "http://localhost:8000/api/",
    baseURL: "https://eplusteutonia.com.br/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

