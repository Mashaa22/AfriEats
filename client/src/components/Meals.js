import React, { useState, useEffect } from 'react';
import './Meals.css';
import Swal from 'sweetalert2';

import Meal4 from "../homeimages/food0.jpg"
import{IoSearch} from 'react-icons/io5';

function Meals() {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    date_of_delivery: '',
    status: '',
    price: '',
    quantity: '1',
    address: '',
    // user_id: 2,
  });

  useEffect(() => {
    fetch('https://afrieats-app.onrender.com/meals')
      .then(response => response.json())
      .then(data => setMeals(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const filtered = meals.filter(meal =>
      meal.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMeals(filtered);
  }, [meals, searchQuery]);

  function handleSearchChange(event) {
    event.preventDefault();
    setSearchQuery(event.target.value);
  }

  const handleSubmit = async (meal) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://afrieats-app.onrender.com/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: meal.name,
          price: meal.price,
          quantity: formData.quantity,
          user_id: userId
        }),
      });
      const data = await response.json();
      console.log(data);
 
      Swal.fire({
        icon: 'success',
        title: 'Added to cart!',
        showConfirmButton: false,
        timer: 1500
      });
 
    } catch (error) {
      console.error(error);
    }
  };
 
   
  const token = localStorage.getItem('token');
  fetch(`https://afrieats-app.onrender.com/auto_login?token=${token}`)
    .then(response => response.json())
    .then(data => {
      if (data.entity === 'user' && data.user) {
        setUserId(data.user.id);
        setFormData({
          ...formData,
          user_id: data.user.id // update formData with user id
        });
      } else {
        console.log('Invalid response:', data);
      }
    })
    .catch(error => console.log(error));
 
  return (
    <>
      <div className='meals-page'>
        <div className='image-meal'>
          <img className= "img" src={Meal4} alt='foodland' style={{ width: "100%", height: "400px", objectFit:"cover"}}/>
        </div>

        <div className='text'>
          <h2>Pick A Meal of Your Choice</h2>
          <div className="wrap">
            <form action="" className="search-form">
              <input type="text" className="search" placeholder="Search for meal here" value={searchQuery} onChange={handleSearchChange} />
              <button type="submit"> <IoSearch size={20} /></button>
            </form>
          </div>
        </div>

        <div className='meals'>
          {filteredMeals.map(meal => (
            <div className='meal-card' key={meal.id}>
              <div className='card-image'>
                <img className= "img" src={meal.image_url} alt='meal'/>
                <p>{meal.price}$</p>
              </div>

              <div className='meal-name'>
                <h4>{meal.name}</h4>
                <p>{meal.description}</p>
              </div>

              <div className='submit'>
                <button className='btn' onClick={() => handleSubmit(meal)}>Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Meals;
