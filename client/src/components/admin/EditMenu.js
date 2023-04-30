import React, {useState} from "react";
import "./EditMenu.css"

function EditMenu({orderId, setDisplay}){
    //user select image
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const initialstate = {
        image_url: "",
        name: "",
        description: "",
        restaurant_id: "",
        price: ""
    };

    const [formData, setFormData] = useState(initialstate);
      
    console.log(formData);
      
    const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/menuoptions/${orderId}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",

        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
        alert(data.notice);
        });
    };
    
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          image_url: name === "image_url" ? value : prevState.image_url,
          name: name === "name" ? value : prevState.name,
          description: name === "description" ? value : prevState.description,
          restaurant_id: name === "restaurant_id" ? value : prevState.restaurant_id,
          price: name === "price" ? value : prevState.price
        }));
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
                            <p>Add Image</p>
                        </label>

                        <input
                        name="image"
                        type="file"
                        id="file"
                        onChange={handleOnChange}
                        />
                        <img src={file} className="display-image"/>
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
                            <select name="restaurant" onChange={handleOnChange} class="form-select" aria-label="Default select example">
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