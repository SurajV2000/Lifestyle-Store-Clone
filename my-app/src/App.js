import "./App.css"

import './App.css';
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import MainRoutes from "./Components/MainRoutes";
// import { Men } from './pages/Men';
import AdminLogin from "./Components/Admin/AdminLogin";





import { Cart } from './pages/Cart';
import Checkout from "./pages/Checkout"
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';

import { Women } from "./pages/Women";
import Footer from "./Components/Home/Footer";

import Payment from "./pages/Payment";
import Admin from "./pages/Admin";
// import Navbar from "./Components/Home/Navbar";





function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
    {/* <Women/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Admin/> */}
      {/* <Cart/> */}

{/*       
      <Admin/>
      <Cart/> */}

      {/* < Navbar/>
      <Men /> */}

      {/* <SignUp/> */}


      <Admin/>

      <AdminLogin/>
      {/* <Cart/> */}
    
      
      {/* <AdminRouter/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
     
      {/* <MaiRoutes/> */}
      {/* <Admin/>
      <Cart/> */}

     
      <MainRoutes/>

      {/* <Men /> */}

      {/* <SignUp/> */}
      {/* <Login/> */}
     
  
    
    
      {/* <Admin/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Payment/> */}
      

    </div>
  );
}

export default App;
