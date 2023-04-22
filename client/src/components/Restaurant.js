import React from 'react'
import './Restaurant.css'
import { Link } from 'react-router-dom';
import Restaurants from "../homeimages/foodland.jpg"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Restaurant() {
  return (
    <>
    <div className='restaurant-page'>
        <div className='text'>
            <h1>
                Restaurants

            </h1>
            <div className="wrap">
                 <form action="" className="search-form">
                    <input type="text" name="search" placeholder="Search for restaurant here" />
                    <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form> 
                    
            </div>  
                    
        </div>



        
        <div className='restaurant-images'>
        
            <div className='image-container'>
                <div className='img'>
                <Link to="/restaurant-views"><img className= "img" src={Restaurants}alt='foodland'></img></Link> 

                </div>
                <div className='text'> <h3>  Restaurant</h3></div>
            </div>
            <div className='image-container'>
                <div className='img'>
                <Link to="/restaurant-views"><img className= "img" src={Restaurant}alt='foodland'></img></Link> 

                </div>
                <div className='text'> <h3>  Restaurant</h3></div>
            </div>

            
            
        </div>

    </div>
      
    </>
  )
}

export default Restaurant
