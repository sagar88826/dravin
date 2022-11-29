import React from 'react'
import './Error404.css'
import ErrorImg from '../Img/ReadmeImg/Error404.jpg.jpg'
import { Link } from 'react-router-dom'

export default function Error404() {
   
  return (
    
   <div className="main">
   
    <div className="message">
        <Link to="/" >
        <p>Back to Home </p>
        </Link>
    </div>
   
     <div className='Error404div'>
        <img src={ErrorImg} alt="Looks Like You're Lost : Come Back " />
    </div>
   </div>
    
  )
}

