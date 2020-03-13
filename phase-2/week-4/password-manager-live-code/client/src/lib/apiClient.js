import axios from 'axios';

const apiClient = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

apiClient.interceptors.request.use(function(config){
    config.headers["Authorization"] = "token " + localStorage.getItem('token');
    return config;
})

export default apiClient;