import "./Order.css";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const RestaurantView = () => {
  const { id } = useParams();

  const [userId, setUserId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [restaurant, setRestaurant] = useState({});
  const [course, setCourse] = useState({});
  const [formData, setFormData] = useState({
    date_of_delivery: '',
    status: '',
    price: '',
    quantity: '1',
    address: '',
    // user_id: 2,
  });

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(`/restaurants/${id}`);
        const data = await response.json();
        setRestaurant(data);
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      }
    };

    const fetchCourse = async () => {
      try {
        const response = await fetch(`/menuoptions/${id}`);
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };

    const token = localStorage.getItem('token');
    fetch(`/auto_login?token=${token}`)
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
    
    
    
    fetchRestaurant();
    fetchCourse();
  }, [id]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
    setFormData({
      ...formData,
      quantity: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          user_id: userId,
          restaurant_id: restaurant.id
        }),
      });
      const data = await response.json();
      // window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  


 

  return (
    <div>
      <div>
        <img src={restaurant.image_url} style={{ width: "100%", height: "300px", objectFit:"cover" }} />
      </div>

      <div className="container" style={{ marginTop: "20px", width: "100%" }}>
        <div className="card-restaurant">
          <div className="row no-gutters">
            <div className="col-md-6 grey-section">
              <h2>Chef's Quote</h2>
              <br />
              <br />
              <img src={restaurant.chef_url} style={{ width: "70%", height: "200px", objectFit:"cover"}} />
              <br />
              <br />
              <p>{restaurant.chef_quote}</p>
              <br />
              <br />
              <p>{restaurant.chef_name}</p>
            </div>

            <div className="col-md-6 dark-grey-section">
              <h2 style={{ textAlign:"center", color: "white" }}>Courses</h2>
              <div style={{ textAlign:"center", color: "white" }}>
                <form onSubmit={handleSubmit}>
                  <button type="submit" style={{ color: "white" }} onClick={() => {
                    setFormData({
                      ...formData,
                      price: course.price
                    });
                  }}>
                    {course.name}...........................{course.price}$
                  </button>
                  <p style={{ color: "white" }}>({course.description})</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}

export default RestaurantView;

