import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OrderHistory from "./OrderHistory";
import OrderStatus from "./OrderStatus";
import RestaurantView from "./RestaurantView";
import Slides from "./Slides";


function App() {
  return (
    <div className="App">

<Router>
     
      <Routes>
       
        <Route path="/order" element={<OrderStatus />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/restaurant-view" element={<RestaurantView />} />
        <Route path="/slides" element={<Slides />} />
     

     

       
      </Routes>

      </Router>
      
    </div>
  );
}

export default App;
