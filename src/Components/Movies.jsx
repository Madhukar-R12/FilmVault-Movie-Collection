import React, { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'
import axios from 'axios';
import { Pagination } from './Pagination';

export const Movies = ({handleAddToWatchlist , handleRemoveFromWatchlist ,watchlist}) => {
  const [movies , setMovies] = useState([]);
  const [pageno,setPageno] = useState(1);
  function HandlePrev(){
    if(pageno==1){
      setPageno(pageno);
    }else{
    setPageno(pageno-1);
    }
  }
  function HandleFow(){
    setPageno(pageno+1);
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=49a30afa6d8e941aa77e9fdaac765703&language=en-US&page=${pageno}`).then((res)=>{
    // console.log(res.data.results);
    setMovies(res.data.results);
      
    })
    
  },[pageno]);
  // console.log(movies);
  return (
   <div className='p-5'>
        <div className=' text-center text-2xl font-bold  m-5'>
            Trending Movies
        </div>
        <div className='flex m-4 px-3 flex-row justify-between flex-wrap gap-8'>
        {movies.map((movieObj)=>(
          <MovieCard watchlist={watchlist}  handleRemoveFromWatchlist={handleRemoveFromWatchlist}  movieObj={movieObj}  handleAddToWatchlist={handleAddToWatchlist}  key={movieObj.id} name={movieObj.original_title} poster_path={movieObj.poster_path}/>

        ))}

            
        </div>
        <Pagination HandlePrev={HandlePrev} num={pageno} HandleFow={HandleFow} />
   </div>
  )
}

// https://api.themoviedb.org/3/movie/popular?api_key=49a30afa6d8e941aa77e9fdaac765703&language=en-US&page=2