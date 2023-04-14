import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OrderHistory from "./OrderHistory";
import OrderStatus from "./OrderStatus";


function App() {
  return (
    <div className="App">

<Router>
     
      <Routes>
       
        <Route path="/order" element={<OrderStatus />} />
        <Route path="/order-history" element={<OrderHistory />} />
     

       
      </Routes>

      </Router>
      
    </div>
  );
}

export default App;
