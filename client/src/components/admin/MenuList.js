import React from 'react';
import { Link } from "react-router-dom";
import { TrashFill, PenFill } from "react-bootstrap-icons";
import "./MenuList.css";

function MenuList(){
    return(
        <div className='menu-options'>
            <div className='title'>
                <h5>Menu Options</h5>
            </div>
            <div className="table-responsive menu-table">
                <table className="table table-hover">
                    <thead>
                        <tr className='head'>
                            <th>Meal ID</th>
                            <th></th>
                            <th>Meal</th>
                            <th>Restaurant</th>
                            <th>Prices</th>
                            <th>Action</th>
                            <th>Submit Meal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">#1</th>
                            <td><img src='https://i.pinimg.com/736x/2d/b8/fb/2db8fb0232bb507e6789fd7f07d2d9fa.jpg'></img></td>
                            <td>Double Chicken Wings</td>
                            <td>Kfc</td>
                            <td>$40</td>
                            <td className='action'>
                                <span><Link to='/edit-menu'>
                                    <PenFill/>
                                </Link>
                                <TrashFill/></span>
                            </td>
                            <td>View Details</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MenuList;