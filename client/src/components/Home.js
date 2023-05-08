import React, { useEffect, useState } from 'react'
import './Home.css';
import { FaLongArrowAltRight} from "react-icons/fa";
import { Link } from "react-router-dom";
import LandImage from "../homeimages/victoria.jpg";


function ImageSlider() {
    const images = [
      "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSydUaQJJ_yPCv6XZYXeOlclDCrSfoVoffyMg&usqp=CAU",
      "https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg",
    ];
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((index) => (index + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(timer);
    }, [images.length]);
  
    return (
      <div className="image-slider">
        <img className="slider-image" alt="food" src={images[index]} />
      </div>
    );
  }

function Home() {

  const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
    const getRestaurants = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/restaurants`);
        const FinalData = await response.json();
        setRestaurants(FinalData)
    }

        getRestaurants();
    }, [])
  
  return (
    <>
      <div className='home-main'>
        <div className='image-home'>
        <img
  className="land-image"
  src={LandImage}
  alt="foodland"
/>
<h1 className='heading'>
  Discover new flavors, one tap at a time
</h1>

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


        <div className='icon'>    
        <h2> Best of AfriEats</h2>
        <Link to="/Meals"> <FaLongArrowAltRight size={50}color="black" /></Link>
        </div>
        <ImageSlider/>

    </div>
   

       
     
    </>
  )
}

export default Home