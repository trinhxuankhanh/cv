import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://7xnz4.sse.codesandbox.io',
});

axiosClient.interceptors.request.use( async config => {
    return config
} )

axiosClient.interceptors.response.use(response => {
    if (response && response.data) return response.data

    return response
}, error => {
    throw error;
})

export default axiosClient;