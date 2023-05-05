import React from "react";
import { TrashFill, PenFill } from "react-bootstrap-icons";

function MenuOption({option, onDelete, setDisplay, setMenu}){

    const { id, name, image_url, description, price, restaurant} = option;
    //delete menu option
    const handleDelete=(e)=>{
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/menuoptions/${id}`, {
            method: "DELETE",
        })
        .then((response) => {
            if (response.ok) {
            // show success message
            alert(`${name} has been successfully deleted`);
            onDelete(id);
        } else {
            // show error message
            alert(`An error has occurred while trying to delete ${name}`);
        }
        });
        
    }

    //adding a meal to the day's menu
    const handleSubmitMeal=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('menuoption_id', id);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('image_url', image_url.url);

        const formDataObj = Object.fromEntries(Array.from(formData.entries()));
        console.log(formDataObj);
        fetch(`${process.env.REACT_APP_API_URL}/meals`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObj),
    })
    .then(response => {
        if (response.ok) {
            // show success message
            alert(`${name} has been added to today's menu`);
        } else {
            // show error message
            alert(`${name} has failed to be added to today's menu`);
        }
    })
    .catch(error => {
        // show error message
        alert(`${error}`);
    });
};
    //changing display to edit menu item
    const handleChangeDisplay= (e)=>{
        e.preventDefault();
        setMenu(option);
        setDisplay(true)
    };

    return(
        <tr>
            <th scope="row">#{id}</th>
            <td><img src={image_url.url} alt="image"/></td>
            <td>{name}</td>
            <td>{restaurant.name}</td>
            <td>{price}</td>
            <td className='action'>
                <span>
                    <button onClick={handleChangeDisplay}>
                    <PenFill/>
                    </button>

                    <button type='delete' onClick={handleDelete}>
                    <TrashFill/>
                </button></span>
            </td>
            <td><button type="submit" onClick={handleSubmitMeal}>Submit</button></td>
        </tr>
    )
}

export default MenuOption;