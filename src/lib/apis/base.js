import axios from "axios";

const baseUrl = "https://cricket-live-data.p.rapidapi.com/"

const headers ={
    'X-RapidAPI-Key': 'ba21f7ff85msh07556d3a8587673p1f5c99jsn65a0e5470462',
    'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
}

export const api = axios.create({
    url,
    headers
});