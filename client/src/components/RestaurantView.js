import Slides from "./Slides";
import "./Order.css";

function RestaurantView() {
    return (
      <div>
  
   <div> 
    <img src="./images/kfc.jpg" style={{ width: "100%", height: "300px", objectFit:"cover" }} /> 
    </div>
  
 <div class="container" style={{ marginTop: "20px" }}>
  <div class="card-restaurant">
    <div class="row no-gutters">

      <div class="col-md-6 grey-section">
        <h2>Chef's Quote</h2>
        <br></br>
        <br></br>
        <img src="./images/Gordon.jpg" style={{ width: "70%", height: "200px", objectFit:"cover"}} /> 
        <br></br>
        <br></br>
        <p>Cooking is like painting. Just as there are only so many notes or colours, there are only so many flowers.It is how you combine them that sets your apart</p>
        <br></br>
        <br></br>
        <p>Gordon Ramsey</p>

      </div>

      <div class="col-md-6 dark-grey-section">
        <h2 style={{ textAlign:"center" }}>Courses</h2>
        <div style={{ textAlign:"center" }}>
        <p>Double Chicken ..................................10$</p>
        <p>(Crispy chicken fry, Fries, Soft Drinks, Sauce)</p>
        <br></br>
        <p>Double Chicken ..................................10$</p>
        <p>(Crispy chicken fry, Fries, Soft Drinks, Sauce)</p>
        <br></br>
        <p>Double Chicken ..................................10$</p>
        <p>(Crispy chicken fry, Fries, Soft Drinks, Sauce)</p>
        <br></br>
        <p>Double Chicken ..................................10$</p>
        <p>(Crispy chicken fry, Fries, Soft Drinks, Sauce)</p>
        </div>
       
      </div>
    </div>
  </div>
</div>

  <br></br>

 
 <Slides />

        
      </div>
    );
  }
  
  export default RestaurantView;
  