import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

