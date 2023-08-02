import axios from 'axios';
import { api } from '../urlConfig';


const axiosInstance = axios.create({
    baseURL:api,
    // header:{
    //     'Authorization':''
    // }


})


export default axiosInstance;