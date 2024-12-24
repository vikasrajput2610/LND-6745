import axios from "axios";
 
const URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;
 
const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};
 
export const fetchData = async (param) => {
    console.log("the key is ",process.env.API_KEY)
   const data=await axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`);
   return data.data.results;
};
 

export const imageURL='https://image.tmdb.org/t/p/original';