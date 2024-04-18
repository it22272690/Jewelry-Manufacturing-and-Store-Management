import axios from 'axios';
import { api } from '../urlConfig';
import store from '../store';
import { authConstants } from '../actions/constants';
const token =window.localStorage.getItem("token");
const axiosInstance=axios.create({
    baseURL:api,
    headers:{
        'Authorization':token? `Bearer ${token}`:''
    }
   
});

axiosInstance.interceptors.request.use((req) => {
    console.log('Request interceptor triggered'); // Add this line
    const { auth } = store.getState();
    if (auth.token) {
        req.headers.Authorization = `Bearer ${auth.token}`;
    }
    return req;
});

axiosInstance.interceptors.response.use(
    (res) => {
        console.log('Response interceptor triggered'); // Add this line
        return res;
    },
    (error) => {
        console.log('Error interceptor triggered'); // Add this line
        console.log(error.response);
        const { status } = error.response;
        if (status === 401) {
            localStorage.clear();
            store.dispatch({ type: authConstants.LOGOUT_REQUEST });
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;