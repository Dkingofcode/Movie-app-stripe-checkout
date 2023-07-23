import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from './Requests';
import "./Banner.css";

const BASE_URL =  'https://api.themoviedb.org/3'

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try { 
       const request = await axios.get(BASE_URL + requests.fetchNetflixOriginals);
       setMovie(
         request.data.results[
           Math.floor(Math.random() * request.data.results.length - 1)
         ]
       );
       return request; 
    } catch(error){
      console.error('Error fetching data');
      setMovie(null);
    }
  }
    fetchData();
  }, []);


    function truncate(string, n){
    return string?.length > n ? string.substr(0, n-1) + '...' : string
   }
 
 
    return (
    <header className='banner' style={{ backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition: `center center`,}}>
     <div className='banner__contents'>
     <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
     <div className='banner__buttons'>
      <button className='banner__button'>Play</button>
      <button className='banner__button'>My List</button>   
     </div>
      <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
    </div> 

    <div className='banner--fadeBottom'>

    </div>
     </header>
  );
}

export default Banner;
