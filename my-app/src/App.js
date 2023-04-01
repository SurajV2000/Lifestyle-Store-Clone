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
import MainRoutes from "./Components/MainRoutes";
import AdminRouter from "./Components/Admin/AdminRouter";





function App() {
  return (
    <div className="App">
      {/* < Navbar/>
      <Men />

      <SignUp/> */}
      {/* <Login/> */}
      <Admin/>
      {/* <Cart/> */}
    
      
      {/* <AdminRouter/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
     
      {/* <MainRoutes/> */}

    </div>
  );
}

export default App;
