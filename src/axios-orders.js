import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-f14cc.firebaseio.com/'
});

export default instance;