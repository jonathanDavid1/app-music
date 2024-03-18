//this is an instances with axios

import axios from "axios";

const axiosMusic = axios.create({
    baseURL: "https://music-api-spotify.2.us-1.fl0.io"
})

export {
    axiosMusic
}