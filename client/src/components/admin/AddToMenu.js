import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddToMenu.css"

function AddToMenu({resId}){
    const history = useNavigate();
    const initialstate = {
        name: "",
        description: "",
        price: "",
        image_url: null
    };

    const [menuData, setMenuData] = useState(initialstate);

    //submit menu  
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('restaurant_id', resId);
        formData.append('name', menuData.name);
        formData.append('price', menuData.price);
        formData.append('description', menuData.description);
        formData.append('image_url', menuData.image_url);
        fetch("https://afrieats-app.onrender.com/menuoptions", {
            method: "POST",
            body: formData
        })
        .then((response) => {
                if (response.ok) {
                // show success message
                    alert(`a new menu option has been successfully added`);
                    history("/menu-list");

            } else {
                // show error message
                alert(`An error has occurred when adding a new menu option`);
            }
        })
            .catch(error => alert(error));
        
    };
    const [file, setFile] = useState();
    const onImageChange = (event) => { 
        setMenuData({ ...menuData, image_url: event.target.files[0] });
        setFile(URL.createObjectURL(event.target.files[0]));
    };

    const handleOnChange = (event) => {
        setMenuData({ ...menuData, [event.target.name]: event.target.value });
    };
    return(
            <div className="">
                <form className="edit-profile-form menu-form" onSubmit={handleSubmit}>
                    <div className="form-group upload-image">
                        <label htmlFor="file" className="file-style">
                            <span className="material-symbols-outlined">add</span>
                            <p>Add Image</p>
                        </label>

                        <input
                        name="image_url"
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
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                            name="description"
                            rows="3"
                            onChange={handleOnChange}
                            className="form-control"
                            ></textarea>
                        </div>
                        <input
                        type="hidden"
                        name="restaurant_id"
                        value={resId}
                        />
                        <div className="form-group price">
                            <label htmlFor="price">Price</label>

                            <input
                            name="price"
                            type="text"
                            onChange={handleOnChange}
                            className="form-control"
                            ></input>
                        </div>
                        <div className="button">
                                <button type="submit" className="btn btn-primary rounded" onClick={handleSubmit}>
                                Upload
                                </button>
                                <button type="submit" className="btn btn-light rounded">
                                Cancel
                                </button>
                        </div>
                    </div>          
                </form>
            </div>
    )
}

export default AddToMenu;
