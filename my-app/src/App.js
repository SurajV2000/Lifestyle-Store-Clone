import "./App.css";
import { Men } from "./pages/Men";

import Admin from "./pages/Admin";
import Navbar from "./Components/Home/Navbar";

import './App.css';
// import { Men } from './pages/Men';




import { Cart } from './pages/Cart';
// import {Checkout} from './pages/Checkout'
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import { Women } from "./pages/Women";
import MainRoutes from "./Components/MainRoutes";
import Footer from "./Components/Home/Footer";





function App() {
  return (
    <div className="App">
      < Navbar/>
    {/* <Women/> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
      {/* <Admin/> */}
      {/* <Cart/> */}
      <Footer/>
    <MainRoutes/>
{/*       
      <Admin/>
      <Cart/> */}
      {/* <Checkout/> */}
      

    </div>
  );
}

export default App;
