
import './App.css'
import { Navigation } from './Components/Navigation'
import { Movies } from './Components/Movies'
import { WatchList } from './Components/WatchList'
import {BrowserRouter , Route, Routes} from "react-router-dom"
import { Banner } from './Components/Banner'
import { useEffect, useState } from 'react'


function App() {
  // localStorage.clear('movies');
  let [watchlist,setWatchlist] = useState([])
  
  let handleAddToWatchlist = (movieObj)=>{
    let newWatchlist = [...watchlist , movieObj]
    localStorage.setItem("movies",JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  }
  let handleRemoveFromWatchlist = (movieObj) =>{
    let FilteredData = watchlist.filter((movie)=>{
      return movie.id != movieObj.id
    })
    setWatchlist(FilteredData);
    localStorage.setItem("movies",JSON.stringify(FilteredData));

    console.log(FilteredData);
  }
  useEffect(()=>{
    let LocalStoredMovie = localStorage.getItem("movies");
    if(!LocalStoredMovie){
      return 
    }
    setWatchlist(JSON.parse(LocalStoredMovie));
  },[])
  return (
    <>
    <BrowserRouter>
      <div>

        <Navigation/>
        <Routes>
          <Route path='/' element={
            <>
          <Banner/>
          <Movies watchlist={watchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} handleAddToWatchlist={handleAddToWatchlist}/>
          </>
          }/>
          <Route path='/watchlist' element={<WatchList key={watchlist.id} watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>}/>
        </Routes>

      </div>
      </BrowserRouter>
    </>
  )
}

export default App
