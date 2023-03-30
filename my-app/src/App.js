
import './App.css';
import { Men } from './pages/Men';


import Admin from './pages/Admin';

import { Cart } from './pages/Cart';
// import {Checkout} from './pages/Checkout'



function App() {
  return (
    <div className="App">
      
      <Men/>
      <Admin/>
      <Cart/>
      {/* <Checkout/> */}

    </div>
  );
}

export default App;
