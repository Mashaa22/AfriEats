import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OrderStatus from "./OrderStatus";


function App() {
  return (
    <div className="App">

<Router>
     
      <Routes>
       
        <Route path="/order" element={<OrderStatus />} />
     

       
      </Routes>

      </Router>
      
    </div>
  );
}

export default App;
