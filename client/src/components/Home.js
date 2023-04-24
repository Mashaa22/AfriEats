import React from 'react'
import './Home.css';
import { FaLongArrowAltRight} from "react-icons/fa";
import { Link } from "react-router-dom";
import LandImage from "../homeimages/foodland.jpg"
import BurgerKing from "../homeimages/burgerking.jpeg"
import ChickenInn from "../homeimages/chickeninn.jpeg"
import Dominos from "../homeimages/dominos.png"
import Kfc from "../homeimages/kfc.png"
import Galitos from "../homeimages/galitos.webp"
import Mcdonalds from "../homeimages/mcdonalds.png"
import Nandos from "../homeimages/nandos.jpg"
import Wendys from "../homeimages/wendys.png"



function Home() {
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
        <div className='restaurant-home'>      
            <div className="restaurant-image" ><Link to="/restaurant-views"><img className= "img" src={BurgerKing}alt='burgerking'></img></Link></div>
            <div className="restaurant-image" ><Link to="/restaurant-views"><img className= "img" src={ChickenInn}alt='chickeninn'></img></Link></div>
            <div className="restaurant-image" ><Link to="/restaurant-views"><img className= "img" src={Dominos}alt='dominos'></img></Link></div>
            <div className="restaurant-image" ><Link to="/restaurant-views"><img className= "img" src={Kfc}alt='kfc'></img></Link></div>
            <div className="restaurant-image" ><Link to="/restaurant-views"><img className= "img" src={Wendys}alt='wendys'></img></Link></div>
            <div className="restaurant-image" ><Link to="/restaurant-views"><img className= "img" src={Galitos}alt='galitos'></img></Link></div>
            <div className="restaurant-image" ><Link to="/restaurant-views"><img className= "img" src={Mcdonalds}alt='mcdonalds'></img></Link></div>
            <div className="restaurant-image" ><Link to="/restaurant-views"><img className= "img" src={Nandos}alt='nandos'></img></Link></div>      
        </div>
        <div className='icon'>
          
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
       

    </div>
    

        
      
    </>
  )
}

export default Home
