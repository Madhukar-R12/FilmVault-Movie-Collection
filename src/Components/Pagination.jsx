import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Pagination = ({HandleFow , HandlePrev ,num}) => {
  return (
    <div className='bg-gray-500 mt-6 p-4 flex justify-center'>
        <FaArrowLeft onClick={HandlePrev} className='mt-1 hover:cursor-pointer'/>
        &nbsp;  &nbsp;  {num}  &nbsp;&nbsp;
        <FaArrowRight onClick={HandleFow} className='mt-1 hover:cursor-pointer' />
    </div>
  )
}
