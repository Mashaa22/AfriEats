
import "./Order.css";

function Checkout() {
    return (
      <div>
  
   <div> 
    <img src="./images/spit.jpg" style={{ width: "100%", height: "300px", objectFit:"cover" }} /> 
    </div>
<div style={{ textAlign: "center" }}>

<h2> Your Orders</h2>
</div>



  <div class="card-checkout" style={{width: "70%", marginTop:"20px", height:"400px"}}>
    <div >

    <table class="table"  >
    <thead>
      <tr>
      <th>Food</th>
      <th>Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Date</th>
     
      </tr>
      
    </thead>
  
    <tbody>
     <tr>
      <td><img class="circular-image" src="./images/Chicken.jpg" /></td>
      <td>Double chicken</td>
      <td>10$</td>
      <td>1</td>
      <td>5-2-2023</td>
    </tr> 
    <tr>
    <td><img class="circular-image" src="./images/Chicken.jpg" /></td>
      <td>Double chicken</td>
      <td>10$</td>
      <td>1</td>
      <td>5-2-2023</td>
    </tr> 
    <tr>
      <td><img class="circular-image" src="./images/Chicken.jpg" /></td>
      <td>Double chicken</td>
      <td>10$</td>
      <td>1</td>
      <td>5-2-2023</td>
    </tr> 
    </tbody>
  </table>
        
    </div>

    <p> Debit Card</p>
    <p>Paypal</p>
    <button type="button" class="btn btn-dark">Order now</button>
</div>

  <br></br>
        
      </div>
    );
  }
  
  export default Checkout;
  