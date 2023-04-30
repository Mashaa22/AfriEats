import React, { useState, useEffect } from 'react';
import './Restaurant.css';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div className='restaurant-page'>
        <div className='text'>
          <h1>Restaurants</h1>
          <div className='wrap'>
            <form action='' className='search-form'>
              <input type='text' name='search' placeholder='Search for restaurant here' />
              <button type='submit'>
                <FaSearch />
              </button>
            </form>
          </div>
        </div>

        <div className='restaurant-images'>
          {restaurants.map(restaurant => (
            <div className='image-container' key={restaurant.id}>
              <div className='img'>
                <Link to={`/restaurant-views/${restaurant.id}`}>
                  <img className='img' src={restaurant.image_url} alt='restaurant' />
                </Link>
              </div>
              <div className='text1'>
                <h3>{restaurant.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Restaurant;
