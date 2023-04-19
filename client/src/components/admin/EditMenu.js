import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./EditMenu.css"

function EditMenu(){
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return(
            <div className="">
                <form className="edit-profile-form menu-form">
                    <div className="form-group upload-image">
                        <label htmlFor="file" className="file-style">
                            <span className="material-symbols-outlined">add</span>
                            <p>Add Image</p>
                        </label>

                        <input
                        name="image"
                        type="file"
                        id="file"
                        onChange={handleChange}
                        />
                        <img src={file} className="display-image"/>
                    </div>
                    <div className="add-to-menu">
                        <div className="form-group">
                            <label htmlFor="name">Meal Name</label>
                            <input
                            name="name"
                            type="text"

                            className="form-control"
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                            name="description"
                            rows="3"
                            className="form-control"
                            ></textarea>
                        </div>
                        <div className="form-group restaurant">
                            <label htmlFor="restaurant">Restaurant</label>
                            <select name="restaurant" class="form-select" aria-label="Default select example">
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
                            className="form-control"
                            ></input>
                        </div>
                        <div className="button">
                                <button type="submit" className="btn btn-primary rounded">
                                Upload
                                </button>
                                <Link to='/menu-list'>
                                <button type="submit" className="btn btn-light rounded">
                                Cancel
                                </button>
                                </Link>
                        </div>
                    </div>          
                </form>
            </div>
    )
}

export default EditMenu;