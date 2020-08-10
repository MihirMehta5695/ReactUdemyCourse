import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// Initiating a new interceptor
axios.interceptors.request.use(requestConfig => {
    console.log(requestConfig);
    // ALWAYS RETURN THE requestConfig object, otherwise you are blocking the request
    // You can edit the requestConfig here
    return requestConfig;
}, error => {
    console.error(error);
    return Promise.reject(error)
});

// Similarly, for interceptors on response received from Server, we can use the following:
axios.interceptors.response.use(responseConfig => {
    console.log(responseConfig);
    // ALWAYS RETURN THE responseConfig object, otherwise you are blocking the request
    // You can edit the responseConfig here
    return responseConfig;
}, error => {
    console.error(error);
    return Promise.reject(error)
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
