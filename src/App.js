import './App.css';
import shoppingcart from './images/shopping-cart.png';
import HomePage from './components/HomePage';
import Store from './components/Store';
import Footer from './components/Footer';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <div className="header-box">
          <button className="nav-logo"></button>
          <div className="nav-right-container">
            <nav className="nav-bar">
              <Link to="/" className="nav-buttons">
                <button className="nav-buttons">Home</button>
              </Link>
              <Link to="/Store" className="nav-buttons">
                <button className="nav-buttons">Store</button>
              </Link>
              <button className="nav-buttons">About Us</button>
              <button className="nav-buttons">Contact Us</button>
            </nav>
            <button className="shoppingcart">
              <img
                src={shoppingcart}
                alt="Shopping Cart"
                className="shoppingcartimg"
              />
            </button>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Store" element={<Store />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
