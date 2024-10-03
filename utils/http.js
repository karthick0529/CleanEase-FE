import axios from "axios";

const instance = axios.create({
    baseURL:`https://sparklepro-be.onrender.com/api`
    // baseURL:"http://localhost:3000/api"
    // timeout:1000
})

export default instance;