import "./App.css";
import { Men } from "./pages/Men";


import Navbar from "./Components/Home/Navbar";

import './App.css';
// import { Men } from './pages/Men';





import { Cart } from './pages/Cart';
import Checkout from "./pages/Checkout"
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import MainRoutes from "./Components/MainRoutes";
import Payment from "./pages/Payment";





function App() {
  return (
    <div className="App">

      {/* < Navbar/>
      <Men /> */}

      {/* <SignUp/> */}
      <Login/>
      {/* <Admin/> */}
      {/* <Cart/> */}
    
      
      {/* <Admin/>
      <Cart/> */}

     
      {/* <MainRoutes/> */}

      {/* <Men /> */}

      {/* <SignUp/> */}
      {/* <Login/> */}
     
  
    
    
      {/* <Admin/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      <Payment/>
      

    </div>
  );
}

export default App;
