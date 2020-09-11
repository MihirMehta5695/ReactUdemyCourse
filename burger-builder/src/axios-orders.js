import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://my-react-burger-builder-2020.firebaseio.com/"
});


export default axiosInstance;