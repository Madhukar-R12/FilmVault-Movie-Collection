import React, { useEffect, useState } from 'react'
import { FaArrowDown, FaArrowUpLong, FaUsersGear } from "react-icons/fa6";
import genreid from "../utility/genre"
export const WatchList = ({watchlist , setWatchlist , handleRemoveFromWatchlist}) => {
  let [searchstate , setSearchState] = useState("");
  let [genreList , setGenreList] = useState(["All Genres"])
  let [currentgenre , setCurrentgenre] = useState("All Genres")
  let search = (e)=>{
    let value = e.target.value.toLowerCase();
    setSearchState(value);
    console.log(value);
    console.log(watchlist);
  }

  function sortedasc(){
    let SortedIncreasing =  watchlist.sort((movieA,movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })
    setWatchlist([...SortedIncreasing])
  }

  function sorteddesc(){
    let SortedDecreasing =  watchlist.sort((movieA,movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })
    setWatchlist([...SortedDecreasing]);

  }
  let selectgenre = (genre)=>{
    setCurrentgenre(genre);
  }

  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return genreid[movieObj.genre_ids[0]]
    })
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp ]);
    
  },[watchlist])

  return(
    <>
    <div className='flex flex-wrap m-4 justify-center'>
      {genreList.map((movieobj) => (
        <button
          onClick={() => selectgenre(movieobj)}
          className={currentgenre === movieobj ?
            'before:ease relative  overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-400 hover:before:h-64 hover:before:-translate-y-32 cursor-pointer flex items-center text-blue font-bold rounded-2xl justify-center h-[3rem] w-[9rem] mx-2 my-2' :
             'before:ease relative  overflow-hidden border border-gray-500 text-white-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-gray-500 before:duration-300 hover:text-white hover:shadow-gray-400 hover:before:h-64 hover:before:-translate-y-32 cursor-pointer flex items-center text-gray font-bold rounded-2xl justify-center h-[3rem] w-[9rem] mx-2 my-2'}>
          <span class="relative z-10">{movieobj}</span>
        </button>
      ))}
    </div>
  
    <div className='flex justify-center my-4'>
      <input
        type="text"
        onChange={search}
        value={searchstate}
        placeholder='Search Movies'
        className='p-2 bg-gray-200 px-5 outline-none rounded-sm mt-4 w-full max-w-md'
      />
    </div>
  
    <div className='rounded-lg overflow-hidden border border-gray-200 m-8'>
    <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <table className='w-full text-gray-500 text-center'>
        <thead className='border-b-2'>
          <tr>
            <th>Name</th>
            <th className='flex items-center gap-2 justify-center'>
              <FaArrowUpLong onClick={sortedasc} />
              <div>Ratings</div>
              <FaArrowDown onClick={sorteddesc} />
            </th>
            <th>Popularity</th>
            <th>Genre</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.filter((movieobj) => {
            if (currentgenre === "All Genres") {
              return true;
            } else {
              return genreid[movieobj.genre_ids[0]] === currentgenre;
            }
          }).filter((obj) => obj.original_title.toLowerCase().includes(searchstate))
            .map((movieObj) => (
              <tr className='border-b-2'>
                <td className='flex items-center py-8 px-6'>
                  <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="" />
                  <div className='mx-8'>{movieObj.original_title}</div>
                </td>
                <td className='w-4'>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genreid[movieObj.genre_ids[0]]}</td>
                <td onClick={() => handleRemoveFromWatchlist(movieObj)} className='text-red-800 cursor-pointer'><button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-50">Delete</button></td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  </>
  )};  