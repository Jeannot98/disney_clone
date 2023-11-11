import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='ef1688e9524628b53c2885ae3a3737ed'
const movieByGenreBaseUrl="https://api.themoviedb.org/3/discover/movie?api_key=ef1688e9524628b53c2885ae3a3737ed"


//'https://api.themoviedb.org/3/trending/all/day?api_key=ef1688e9524628b53c2885ae3a3737ed'
const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getmovieByGenreId=(id)=>axios.get(movieByGenreBaseUrl+"&with_genres="+id)

export default {getTrendingVideos,  getmovieByGenreId}