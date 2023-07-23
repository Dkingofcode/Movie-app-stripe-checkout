import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';
//import logo from "./assets/vite.svg";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import logo from '/boliviainteligente-zhIFruQW6qY-unsplash.jpg'

function Row({ title, fetchUrl, isLargeRow = false })   {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);


   const base_url = "https://image.tmdb.org/t/p/original/";
    //https://image.tmdb.org/t/p/original/

   useEffect(() => {
      async function fetchData() {
      try{   
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        setLoading(false);
        return request;
      }catch (error){
        console.error('Error fetching data');
        setLoading(false);
      }
    }

      fetchData();
   }, [fetchUrl]);

     if(loading){
        return <p>Loading...</p>
     }



   return (
     <div className='row'>
       <h2 className='row__title'>{title}</h2>
       <div className='row__posters'>       
       {/* {console.log(movies)}       */}
       {movies?.map((movie) => (  
       movie.poster_path && movie.backdrop_path ?  ( 
            <img
            key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
              />
          ) : null
        ))}
       </div>
     </div>
   );
  }

  export default Row;