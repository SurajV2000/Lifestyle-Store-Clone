import "./App.css"

import './App.css';
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import MainRoutes from "./Components/MainRoutes";
// import { Men } from './pages/Men';






import { Cart } from './pages/Cart';
import Checkout from "./pages/Checkout"
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

import { Women } from "./pages/Women";
import MainRoutes from "./Components/MainRoutes";
import Footer from "./Components/Home/Footer";

// import MainRoutes from "./Components/MainRoutes";


import Payment from "./pages/Payment";





function App() {
  return (
    <div className="App">
      {/* < Navbar/> */}
    {/* <Women/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Admin/> */}
      {/* <Cart/> */}
     <MainRoutes/>

      <Admin/>
      {/* <Cart/> */}
      {/* <Footer/> */}


    {/* <MainRoutes/> */}

{/*       
      <Admin/>
      <Cart/> */}

      {/* < Navbar/>
      <Men /> */}

      {/* <SignUp/> */}

      {/* <Login/> */}


      {/* <Admin/> */}
      <Cart/>
    
      
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
