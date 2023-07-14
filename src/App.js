import './App.css';
import shoppingcart from './images/shopping-cart.png';
import HomePage from './components/HomePage';
import Store from './components/Store';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [cartNumber, setcartNumber] = useState(0);

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
              <Link to="/About" className="nav-buttons">
                <button className="nav-buttons">About Us</button>
              </Link>
              <Link to="/Contact" className="nav-buttons">
                <button className="nav-buttons">Contact Us</button>
              </Link>
            </nav>
            <div className="cartcontainer">
              <div className="cart-number">{cartNumber}</div>
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
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Store" element={<Store />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
