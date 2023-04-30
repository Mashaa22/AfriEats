import React, { useState, useEffect } from 'react';
//import { Link } from "react-router-dom";
//import { TrashFill, PenFill } from "react-bootstrap-icons";
import "./MenuList.css";
import MenuOption from './MenuOption';
import EditMenu from './EditMenu'
function MenuList(){
    const [menuOptions, setMenuOptions] = useState();
    const [display, setDisplay] = useState(false);
    const [orderId, setOrderId] = useState();
    //get menu options
    useEffect(() => {
        fetch("/menuoptions")
        .then(res => res.json())
        .then(response => {
            console.log(response)
            setMenuOptions(response)
        })
    }, [])
    console.log(menuOptions);
    const optionRows = menuOptions && menuOptions.map((option)=> <MenuOption option={option}
        setDisplay={setDisplay}
        setOrderId={setOrderId}
        key={option.id}
    />)
    return(
        <>
        {
            display === false ?
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
                            {optionRows}
                        </tbody>
                    </table>
                </div>
            </div>
            :
            <EditMenu orderId={orderId} setDisplay={setDisplay}/>
        }
        
        </>
    )
}

export default MenuList;