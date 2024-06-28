import axios from "axios";

const api = axios.create({
    baseURL:'https://groot-project.onrender.com/api'
})

export default api
