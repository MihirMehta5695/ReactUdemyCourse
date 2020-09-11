import axios from 'axios';

// You can create multiple copy of axios instance!
// But this should be done in different files.
// This instance overrides settings of the global axios instance {declared in @index.js}.
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;