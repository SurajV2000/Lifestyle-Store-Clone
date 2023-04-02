import "./App.css"

import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import MainRoutes from "./Components/MainRoutes";
import { Cart } from './pages/Cart';
import Checkout from "./pages/Checkout"
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';

import { Women } from "./pages/Women";
import Footer from "./Components/Home/Footer";

import Payment from "./pages/Payment";





function App() {
  return (
    <div className="App">

      {/* <Cart/> */}
      <MainRoutes/>

    </div>
  );
}

export default App;
