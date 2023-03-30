
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Men } from './pages/Men';


import Admin from './pages/Admin';

import { Cart } from './pages/Cart';
import Navbar from './Components/Home/Navbar';
import MainRoutes from './Components/MainRoutes';
import Checkout from './pages/Checkout';



function App() {
  return (
    <div className="App">
      
       {/* <Men/> */}
       {/* <Admin/> */}
      {/* <Cart/>  */}
      
      <MainRoutes/>
      {/* <Checkout/> */}
      
      

    </div>
  );
}

export default App;
