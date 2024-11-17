import axios from "axios";


const api = axios.create({
    baseURL: "https://yt-api.p.rapidapi.com",
    params: {
        geo: 'TR',
        lang: 'tr'
    },
    headers: {
        'x-rapidapi-key': '5a351d53c0msh396abe21c99b9dep13da85jsn9695451cf34e',
        'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    },
})

export default api;