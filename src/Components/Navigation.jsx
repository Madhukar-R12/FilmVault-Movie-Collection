import React from 'react'
import movielogo from "/movielogo.png"
import {Link} from "react-router-dom"
export const Navigation = () => {
  return (
    <div>
      <nav className='flex border items-center gap-4 space-x-4 pl-4 py-4'>
        <div>
          <img className='h-[50px]' src={movielogo} alt="" />
        </div>
        <Link to="/" className=' text-blue-400 text-3xl font-semibold'>Movies</Link>
        <Link to="/watchlist" className=' text-blue-400 text-3xl font-semibold'>Watchlist</Link>
      </nav>
    </div>
  )
}
