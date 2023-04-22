import React from 'react'
import './Meals.css';
import { Link } from 'react-router-dom';

import Meal1 from "../homeimages/food2.jpeg"
import Meal4 from "../homeimages/food0.jpg"



import{IoSearch} from 'react-icons/io5';


function Meals() {
  return (
    <>
    <div className='meals-page'>
        <div className='image-meal'>
        <img className= "img" src={Meal4}alt='foodland' style={{ width: "100%", height: "400px", objectFit:"cover"}}/>
        </div>

        <div className='text'>
            <h2>Pick A Meal of Your Choice</h2>
            <div className="wrap">
                <form action="" className="search-form">
                    <input type="text" className="search" placeholder="Search for meal here" />
                    <button type="submit"> <IoSearch size={20} /></button>
                </form>
                    
            </div>
        </div>

        <div className='meals'>

            <div className='meal-card'>
                <div className='card-image'>
                    <img className= "img" src={Meal1}alt='meal'/> 
                    <p>10$</p>
                </div>

                <div className='meal-name'>
                    <h4>Double Chicken</h4>
                    <p> Crispy chicken fry|sauce|Soft drink </p>
                </div> 

                <div className='submit'> <button className='btn'> Order Now</button></div> 
            </div>

            <div className='meal-card'>
                <div className='card-image'>
                    <img className= "img" src={Meal1}alt='meal'/> 
                    <p>10$</p>
                </div>

                <div className='meal-name'>
                    <h4>Double Chicken</h4>
                    <p> Crispy chicken fry|sauce|Soft drink </p>
                </div> 

                <div className='submit'> <button className='btn'> Order Now</button></div> 
            </div>

            <div className='meal-card'>
                <div className='card-image'>
                    <img className= "img" src={Meal1}alt='meal'/> 
                    <p>10$</p>
                </div>

                <div className='meal-name'>
                    <h4>Double Chicken</h4>
                    <p> Crispy chicken fry|sauce|Soft drink </p>
                </div> 

                <div className='submit'> <button className='btn'> Order Now</button></div> 
            </div>

        

        <div className='meal-card'>
            <div className='card-image'>
                <img className= "img" src={Meal1}alt='meal'/> 
                <p>10$</p>
            </div>

            <div className='meal-name'>
                <h4>Double Chicken</h4>
                <p> Crispy chicken fry|sauce|Soft drink </p>
            </div>

            <div className='submit'> <button className='btn'> Order Now</button></div>
        </div>

        <div className='meal-card'>
            <div className='card-image'>
                <img className= "img" src={Meal1}alt='meal'/> 
                <p>10$</p>
            </div>

            <div className='meal-name'>
                <h4>Double Chicken</h4>
                <p> Crispy chicken fry|sauce|Soft drink </p>
            </div>

            <div className='submit'> <button className='btn'> Order Now</button></div>
        </div>

        <div className='meal-card'>
            <div className='card-image'>
                <img className= "img" src={Meal1}alt='meal'/> 
                < p>10$</p>
            </div>

            <div className='meal-name'>
                <h4>Double Chicken</h4>
                <p> Crispy chicken fry|sauce|Soft drink </p>
            </div>

                      <div className='submit'>
                          <Link to='/cart'>
                              <button className='btn'> Order Now</button>
                            </Link>
                      </div>
        </div>
        </div>
        


        

    </div>

      
    </>
  )
}

export default Meals
