import axios from 'axios';
export const API = axios.create({ baseURL: "http://localhost:8000" });
// export const test = API.get("/")
// export const test = API.post("/auth/login",{username:"jerry",password:"hello"})



// console.log(await test)

// const login = API.post("/auth/login",async ())
