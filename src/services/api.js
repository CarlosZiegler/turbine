import axios from "axios";

const api = axios.create({
    baseURL: 'https://carlosziegler.now.sh'
});

export default api;