import React from 'react'
import './Home.css';
import LandImage from "../homeimages/foodland.jpg"
import BurgerKing from "../homeimages/burgerking.jpeg"
import ChickenInn from "../homeimages/chickeninn.jpeg"
import Dominos from "../homeimages/dominos.png"
import Kfc from "../homeimages/kfc.png"
import Galitos from "../homeimages/galitos.webp"
import Mcdonalds from "../homeimages/mcdonalds.png"
import Nandos from "../homeimages/nandos.jpg"
import PizzaHut from "../homeimages/pizzahut.png"
import Tacobell from "../homeimages/taco.png"
import Wendys from "../homeimages/wendys.png"

function Home() {
  return (
    <>
    <div className='home-main'>
        <div className='image-home'>
        <img className= "img" src={LandImage}alt='foodland'></img>
        </div>

        <div className='restaurant-home'>
            {/* <div class="scroll-arrow-container">
                <a href="#top-restaurants">
                    <div class="scroll-arrow">
                    
                    <span class="arrow-right"></span>
                    </div>
                </a>
                <h6 id="top-restaurants">Top Restaurants</h6>
            </div> */}
            {/* <div className='text'>
            <p>Best of AfriEats</p>
            </div> */}
            
            
            
            <div className="restaurant-image" > <img className= "img" src={BurgerKing}alt='burgerking'></img></div>
            <div className="restaurant-image" ><img className= "img" src={ChickenInn}alt='chickeninn'></img></div>
            <div className="restaurant-image" ><img className= "img" src={Dominos}alt='dominos'></img></div>
            <div className="restaurant-image" ><img className= "img" src={Kfc}alt='kfc'></img></div>
            <div className="restaurant-image" ><img className= "img" src={Wendys}alt='wendys'></img></div>
            <div className="restaurant-image" ><img className= "img" src={Galitos}alt='galitos'></img></div>
            <div className="restaurant-image" ><img className= "img" src={Mcdonalds}alt='mcdonalds'></img></div>
            <div className="restaurant-image" ><img className= "img" src={Nandos}alt='nandos'></img></div>
            <div className="restaurant-image" ><img className= "img" src={PizzaHut}alt='pizzahut'></img></div>
            <div className="restaurant-image" ><img className= "img" src={Tacobell}alt='tacobell'></img></div>
            
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
