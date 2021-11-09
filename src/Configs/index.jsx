import axios from "axios";
import { WeB_API } from "../env";

axios.defaults.baseURL = WeB_API

axios.interceptors.response.use(
    (response)=>{
        return response
    },
    (error)=>{
        throw error
    }

)