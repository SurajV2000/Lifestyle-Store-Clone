import "./App.css"
import './App.css';
import Signup from "./pages/SignUp";
import MainRoutes from "./Components/MainRoutes";
import { Cart } from './pages/Cart';
import Checkout from "./pages/Checkout"
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import { Women } from "./pages/Women";
import Footer from "./Components/Home/Footer";
import Payment from "./pages/Payment";





function App() {
  return (
    <div className="App">
  
      <MainRoutes/>
      {/* <SignUp/> */}
      {/* <Login/> */}
      

    </div>
  );
}

export default App;
