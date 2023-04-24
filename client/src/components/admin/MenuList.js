import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { TrashFill, PenFill } from "react-bootstrap-icons";
import "./MenuList.css";

function MenuList(){
    const [menuOptions, setMenuOptions] = useState();

    //get menu options
    useEffect(() => {
        fetch("/menuoptions")
        .then(res => res.json())
        .then(response => {
        setMenuOptions(response)
        })
    }, [])

    //delete menu option
    const handleDelete=(e)=>{
        e.preventDefault();
        fetch(`/menuoptions/id`, {
            method: "DELETE",
        })
        .then((data) => {
        alert("successfully deleted");
        });
    }
    return(
        <div className='menu-options'>
            <div className='title'>
                <h5>Menu Options</h5>
            </div>
            <div className="table-responsive menu-table">
                <table className="table">
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
                                <button type='delete' onClick={handleDelete}>
                                <TrashFill/>
                                </button></span>
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