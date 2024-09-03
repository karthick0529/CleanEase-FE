import axios from "axios";

const instance = axios.create({
    baseURL:`https://cleanease-backend-780q.onrender.com/api`
    // timeout:1000
})

export default instance;