import React, { useEffect, useState } from 'react'
import './Home.css';
import { FaLongArrowAltRight} from "react-icons/fa";
import { Link } from "react-router-dom";
import LandImage from "../homeimages/foodland.jpg"

function Home() {

  const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
    const getRestaurants = async () => {
        const response = await fetch("/restaurants");
        const FinalData = await response.json();
        setRestaurants(FinalData)
    }

        getRestaurants();
    }, [])
  
  return (
    <>
    <div className='home-main'>
        <div className='image-home'>
        <img className= "img" src={LandImage}alt='foodland' style={{ width: "100%", height: "400px", objectFit:"cover"}}></img>
        </div>
        <div className='icon'>
        <h2> Our Top Restaurants</h2>
        <Link to="/restaurants"> <FaLongArrowAltRight size={50}color="black" /></Link>
        </div>

        <div className='restaurant-container' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
  {restaurants.map((curElem) => {
    return (
      <div className='restaurant-home' key={curElem.id} style={{ flexBasis: '30%', margin: '10px' }}>      
        <div className="restaurant-image">
          <Link to={`/restaurant-views/${curElem.id}`}>
            <img className="img" src={curElem.image_url} alt='' style={{ width: '50%', height: '250px', borderRadius:"50%", objectFit:"cover" }}/>
          </Link>
        </div>
      </div>
    )
  })}
</div>


        {/* <div className='icon'>
         
        <h2> Best of AfriEats</h2>
        <Link to="/Meals"> <FaLongArrowAltRight size={50}color="black" /></Link>

       
        </div>
        <div className='foods-home'>
         
         <div className='food-image'>
         <img className='image'
          alt="food"
          src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg"
        />
         </div>

         <div className='food-image'>
         <img className='image'
          alt="food"
          src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg"/>
         </div>
         <div className='food-image'>
         <img className='image'
          alt="food"
          src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg"
        />
         </div>
        </div>
        */}

    </div>
   

       
     
    </>
  )
}

export default Home