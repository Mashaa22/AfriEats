import "./Order.css";

function Notification() {
    return (
      <div>
  
        <div> 
          <img src="./images/noitification.png" style={{ width: "100%", height: "320px", objectFit:"inherit" }} /> 
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>

          <h3>GET YOUR LATEST UPDATES</h3>

        </div>

        <div class="card-notify" style={{width: "80%", marginTop:"40px", marginBottom: "40px", height:"300px"}}>

          <div >
            <ul style={{listStyle: "inside"}}>
              <li>Kfc added Double Chicken to their menu</li>
              <li>Chicken inn added Strawberry salad to their menu</li>
            </ul>

          </div>

        </div>
      </div>
  );
}
  
export default Notification;
  