import axios from "axios";

const instance = axios.create({
    // baseURL:`https://cleanease-backend-780q.onrender.com/api`
    baseURL:"http://localhost:3000/api"
    // timeout:1000
})

export default instance;