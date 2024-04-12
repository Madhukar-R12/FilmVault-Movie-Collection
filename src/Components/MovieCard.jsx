import React from 'react'
import styled from 'styled-components';
export const MovieCard = ({ movieObj,poster_path,name,handleAddToWatchlist , handleRemoveFromWatchlist , watchlist}) => {
    // console.log(poster_path);
    function doesContain(movieObj){
      for(let i=0; i< watchlist.length; i++){
        if(watchlist[i].id== movieObj.id){
          return true;
        }
      }
      return false;
    }

    
const Container = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-position: center;
  width: 210px;
  
  /* Media query for width */
  @media (max-width: 640px) {
    width: 116px;
  }

  &:hover {
    cursor: pointer;
    /* transform: scale(1.1);
    transition: transform 300ms ease; */
  }
`;
  return (
<Container className="media-class hover:scale-110 duration-300 rounded-xl" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
        {doesContain(movieObj)?
          <div onClick={()=>{handleRemoveFromWatchlist(movieObj)}} className=' flex m-4 rounded-lg bg-gray-900/60  items-center h-8 w-8 justify-start '>
            <span className='flex justify-center mx-1 items-center'>&#10060;</span>
          </div>
          :
          <div onClick={()=>{handleAddToWatchlist(movieObj)}} className=' flex m-4 rounded-lg bg-gray-900/60  items-center h-8 w-8 justify-start '>
            <span className='flex justify-center mx-1 items-center text-white text-4xl mb-2.5'>&#43;</span>
          </div>
        
        }
       
       
        <div className=' text-white text-xl w-full p-4 bg-gray-600/60 rounded-b-xl  text-center'>
            {name}
        </div>
    </Container>
  )
}
