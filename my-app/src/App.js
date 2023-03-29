import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Components/Home/Navbar";
import MainRoutes from './Components/MainRoutes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
   
    </div>
  );
}

export default App;
