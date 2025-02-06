//this is an instances with axios

import axios from "axios";

const axiosMusic = axios.create({
    baseURL: "https://api-music-3oaj.onrender.com"
})

axiosMusic.interceptors.request.use((config) => {
    config.headers.Authorization = `JWT ${JSON.parse(localStorage.getItem("userInfo"))?.state.user.token}`;

    return config
})

export {
    axiosMusic
}