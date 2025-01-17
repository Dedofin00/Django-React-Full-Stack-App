import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const apiUrl = "/choreo-apis/djangoreacttutorial/backend/v1"

console.log("VITE_API_URL:", import.meta.env.VITE_API_URL); // Log VITE_API_URL value
console.log("apiUrl:", apiUrl); // Log default apiUrl value

const baseURL = apiUrl //import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : ;
console.log("baseURL:", baseURL); // Log the final baseURL value

const api = axios.create({
    baseURL: baseURL,
})


api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api