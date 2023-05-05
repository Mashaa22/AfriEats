import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      const response = await fetch('https://afrieats-app.onrender.com/restaurants');
      const FinalData = await response.json();
      setRestaurants(FinalData);
    };

    getRestaurants();
  }, []);

  const restaurantImageStyle = {
    width: 'calc(50% - 10px)',
    marginBottom: '20px',
    position: 'relative',
    overflow: 'hidden'
  };

  const imgStyle = {
    width: '90%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px'
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  return (
    <div className='restaurant-page'>
      <div className='text'>
        <h1>Restaurants</h1>
        <div className='wrap'>
          <form action='' className='search-form'>

          </form>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {restaurants.map((curElem) => {
          return (
            <div key={curElem.id} style={restaurantImageStyle}>
              <Link to={`/restaurant-views/${curElem.id}`}>
                <img src={curElem.image_url} alt={curElem.name} style={imgStyle} />
              </Link>
              <div className='text1' style={textStyle}>
                <h3>{curElem.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Restaurant;
