import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: "6a495ccb8a8b6c5c85b771c6db7fe834",
        language: "ko-KR",
    },
});

export default instance;