import React from 'react'
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLongArrowAltRight} from "react-icons/fa";

import { AiFillFacebook, AiFillTwitterSquare,AiOutlineInstagram,AiFillYoutube } from "react-icons/ai";

function Footer() {
  return (
    <>
    <div className='main'>
      <div className='links'>
        <div className='row-links'>
           <h5> QUICK LINKS</h5> 
        
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Our sevices</a></li>
          <li><a href="#">Vouchers</a></li>
             
        </ul>
        
        </div>
        <div className='row-links'> <h5>USEFULL LINKS</h5>
        <ul >
          <li><a href="#">Career</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
             
        </ul>
        
         </div>
        <div className='row-links'> <h5> FOLLOW US</h5>
          <div className='text-icon'>
            <a href="https://www.facebook.com/afrieats/" target="_blank" rel="noreferrer" >
                <AiFillFacebook size={20}background color='blue' />
            </a>
            <p>facebook</p>

          </div>
          <div className='text-icon'>
            <a href="https://www.instagram.com/afrieats/" target="_blank" rel="noreferrer" className="text-white">
                <AiFillYoutube size={20} background color='red'/>
            </a>
            <p>youtube</p>

          </div>
          <div className='text-icon'>
            <a href="https://twitter.com/afrieats" target="_blank" rel="noreferrer" >
                <AiFillTwitterSquare size={20}background color='rgb(87, 170, 230)' />
            </a>
            <p>twitter</p>

          </div>
          <div className='text-icon'>
            <a href="https://www.instagram.com/afrieats/" target="_blank" rel="noreferrer" className="text-white">
                <AiOutlineInstagram size={20} background color='purple' />
            </a>
            <p>instagram</p>
          </div>
        </div>
        <div className='row-links'> <h5>NEWSLETTER</h5>
          <p> Stay updated with our latest news</p>
          
          <input type="email" id="email" name="email" placeholder='Enter Email'></input>
          
          <button type="submit"><FaLongArrowAltRight size={25}color="black" backGroundColor="yellow"/></button>
          
          
          
          
          
        
        
        
         </div>
        
        </div>

    <div className='copyright'>
      <p className= " footer">
        <small> Copyright &copy; 2023 AfriEats Kenya. All rights reserved</small></p>
    </div>


    </div>

      
    </>
  )
}

export default Footer
