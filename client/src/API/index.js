import axios from 'axios';
const server= process.env.SERVER_HOST;

const instance = axios.create({
    baseURL: `${server}`
})

export default instance;