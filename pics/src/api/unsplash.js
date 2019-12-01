import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID af3abfca372faa45c889511710a0ab3e88fc28b1e97d0d135013737eebe59328'
    }
});
