import React, {useState} from "react";
import "./EditMenu.css"

function EditMenu({menu, setDisplay, onUpdateMeal}){
    
    const initialstate = {
        image_url: "",
        name: menu.name,
        description: menu.description,
        restaurant_id: menu.restaurant_id,
        price: menu.price
    };

    const [menuData, setMenuData] = useState(initialstate);
      
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('restaurant_id', menuData.restaurant_id);
        formData.append('name', menuData.name);
        formData.append('price', menuData.price);
        formData.append('description', menuData.description);
        formData.append('image_url', menuData.image_url);
        console.log(menuData);
        console.log(formData);
        fetch(`https://afrieats-app.onrender.com/menuoptions/${menu.id}`, {
            method: "PATCH",
            body: formData,
        })
        .then((response) => {
                if (response.ok) {
                    onUpdateMeal(menu);
                // show success message
                alert(`submitting changes to ${menu.name} has been done successfully`);
            } else {
                // show error message
                alert(`An error has occurred while submiting changes to ${menu.name}`);
            }
        })
        .catch(error=>alert(error));
    }
       

    //handle form onChange event
    const [file, setFile] = useState();
    const onImageChange = (event) => { 
        setMenuData({ ...menuData, image_url: event.target.files[0] });
        setFile(URL.createObjectURL(event.target.files[0]));
    };
    const handleOnChange = (event) => {
        setMenuData({ ...menuData, [event.target.name]: event.target.value });
    };

    //switch display back to menu-list
    const handleChangeDisplay =(e)=>{
        e.preventDefault();
        setDisplay(false);
    };
    return(
            <div className="">
                <form className="edit-profile-form menu-form" onSubmit={handleSubmit}>
                    <div className="form-group upload-image">
                        <label htmlFor="file" className="file-style">
                            <span className="material-symbols-outlined">add</span>
                            <p>Change Image</p>
                        </label>

                        <input
                        name="image"
                        accept="image/*" 
                        multiple={false}
                        type="file"
                        id="file"
                        onChange={onImageChange}
                        />
                        <img src={file} alt='image' className="display-image"/>
                    </div>
                    <div className="add-to-menu">
                        <div className="form-group">
                            <label htmlFor="name">Meal Name</label>
                            <input
                            name="name"
                            type="text"
                            onChange={handleOnChange}
                            className="form-control"
                            value={menuData.name}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                            name="description"
                            rows="3"
                            onChange={handleOnChange}
                            className="form-control"
                            value={menuData.description}
                            ></textarea>
                        </div>
                        <div className="form-group price">
                            <label htmlFor="price">Price</label>
                            <input
                            name="price"
                            type="text"
                            onChange={handleOnChange}
                            className="form-control"
                            value={menuData.price}
                            ></input>
                        </div>
                        <div className="button">
                                <button type="submit" onClick={handleSubmit} className="btn btn-primary rounded">
                                Upload
                                </button>
                                
                                <button type="submit" onClick={handleChangeDisplay} className="btn btn-light rounded">
                                Cancel
                                </button>
                        </div>
                    </div>          
                </form>
            </div>
    )
}

export default EditMenu;