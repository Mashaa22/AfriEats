import React, { useState, useEffect } from 'react';
import "./MenuList.css";
import MenuOption from './MenuOption';
import EditMenu from './EditMenu'

function MenuList({ adminId }) {
    const [menuOptions, setMenuOptions] = useState();
    const [display, setDisplay] = useState(false);

    //keep state of menuoption data for editing purposes
    const [menu, setMenu] = useState();

    //get menu options
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/menuoptions`)
        .then(res => res.json())
        .then(response => {
            const filteredData = response.filter(menuOption => menuOption.restaurant_id === adminId);
            setMenuOptions(filteredData);
        })
    }, [adminId])

    //update state after deletion
    const onDelete=(id)=>{
        const updatedMenuOptions = menuOptions.filter((option) => option.id !== id);
        setMenuOptions(updatedMenuOptions);
    }

    //update state after editing menuoption
    function handleUpdateMenu(updatedMeal) {
        const updatedMenuOptions = menuOptions.map((meal) => {
        return meal.id === updatedMeal.id ? updatedMeal : meal;
        });
        setMenuOptions(updatedMenuOptions);
    }

    //pass data to menuOption component
    const optionRows = menuOptions && menuOptions.map((option)=> <MenuOption option={option}
        setDisplay={setDisplay}
        onDelete={onDelete}
        setMenu={setMenu}
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
            <EditMenu menu={menu} setDisplay={setDisplay} onUpdateMeal={handleUpdateMenu}/>
        }
        
        </>
    )
}

export default MenuList;