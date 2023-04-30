import React, {useState} from "react";
import "./AddToMenu.css"

function AddToMenu(){
    /*//user select image
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }*/

    const initialstate = {
        image_url: null,
        name: "",
        description: "",
        restaurant_id: "",
        price: ""
    };

    const [menuData, setMenuData] = useState(initialstate);
      
    console.log(menuData);
      
    const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('restaurant_id', menuData.restaurant_id);
    formData.append('name', menuData.name);
    formData.append('price', menuData.price);
    formData.append('description', menuData.description);
    formData.append('image_url', menuData.image_url);

    fetch("/menuoptions", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",

        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
        console.log(data.notice);
        })
        .catch(error=>alert(error));
    };
    const onImageChange = (event) => { 
        setMenuData({image_url: event.target.files[0] });
    };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setMenuData(prevState => ({
          ...prevState,
          name: name === "name" ? value : prevState.name,
          description: name === "description" ? value : prevState.description,
          restaurant_id: name === "restaurant_id" ? value : prevState.restaurant_id,
          price: name === "price" ? value : prevState.price
        }));
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
                        type="file"
                        id="file"
                        onChange={onImageChange}
                        />
                        <img src={menuData.image_url} className="display-image"/>
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
                        <div className="form-group restaurant">
                            <label htmlFor="restaurant">Restaurant</label>
                            <select name="restaurant_id" class="form-select" aria-label="Default select example" onChange={handleOnChange}>
                                <option selected></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
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