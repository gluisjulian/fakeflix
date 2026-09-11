import axios from "axios";

//BASE URL https://api.themoviedb.org/3/
//URL DA API: /movie/11?api_key=577d2f5b971dd09c01fbd6510959c091&language=pt-br


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});


export default api;