import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/home" element={<Home />} />
     
          
        </Routes>

    
        
        
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

