//this is an instances with axios

import axios from "axios";

const axiosMusic = axios.create({
    baseURL: "https://music-api-spotify.2.us-1.fl0.io"
})

axiosMusic.interceptors.request.use((config) => {
    config.headers.Authorization = `JWT ${JSON.parse(localStorage.getItem("userInfo"))?.state.user.token}`;

    return config
})

export {
    axiosMusic
}