import "./Order.css";

function OrderStatus() {
    return (
     
     
     <div>
        <div class="order-head">
          <h1>Order Status</h1>
        </div>
        <div>
          
        <table class="order-table">
    <thead >
      <tr>
      <th>Meals</th>
      <th>Restaurants</th>
      <th>Quantity</th>
      <th>Date of order</th>
      <th>Status</th>
      <th>Address</th>
      
      <th>Action</th>
  
      </tr>
      
    </thead>
  
    <tbody>
     <tr>
      <td>Double chicken</td>
      <td>KFC</td>
      <td>1</td>
      <td>5-2-2023</td>
      <td>Confirmed</td>
      <td>Nairobi</td>
      <td><i class="glyphicon glyphicon-remove"></i></td>
      
      
    </tr> 
  
    </tbody>
  </table>
        </div>
<div class="order-buttons">
<button type="button" class="btn btn-dark">Cancel Order</button>
<button type="button" class="btn btn-dark">Received</button>

</div>

      </div>
    );
  }
  
  export default OrderStatus;
  