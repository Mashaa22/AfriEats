import "./Order.css";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';




const RestaurantView = () => {
const { id } = useParams();

const [userId, setUserId] = useState(null);
const [quantity, setQuantity] = useState(1);
  const [restaurant, setRestaurant] = useState({});
  const [restaurantId, setRestaurantId] = useState(null);
const [meals, setMeals] = useState([]);
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
const fetchRestaurant = async () => {
try {
const response = await fetch(`https://afrieats-app.onrender.com/restaurants/${id}`);
const data = await response.json();
  setRestaurant(data);
  setRestaurantId(data.id)
} catch (error) {
console.error('Error fetching restaurant:', error);
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



fetchRestaurant();
}, [id]);
 
useEffect(() => {
  const fetchCourse = async () => {
    try {
      const res = await fetch("https://afrieats-app.onrender.com/meals");
      const data = await res.json();
      const filteredData = data.filter(meal => meal.restaurant.id === restaurantId);
      setMeals(filteredData);
      console.log(filteredData)
    } catch (error) {
      console.error(error);
    }
  };

  if (restaurantId) {
    fetchCourse();
  }
}, [restaurantId]);

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
const response = await fetch('https://afrieats-app.onrender.com/orders', {
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
  Swal.fire({
    icon: 'success',
    title: 'Added to cart!',
    showConfirmButton: false,
    timer: 1500
  });
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
            <div style={{ textAlign: "center", color: "white" }}>

            {meals.map(meal => (
              <form onSubmit={handleSubmit}>
<button type="submit" style={{ color: "white" }} onClick={() => {
setFormData({
...formData,
price: meal.price,
name: meal.name
});
}}>
{meal.name}...........................{meal.price}$
</button>
<p style={{ color: "white" }}>({meal.description})</p>
</form>
        ))}
             

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