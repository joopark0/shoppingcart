import './App.css';
import shoppingcart from './images/shopping-cart.png';
import HomePage from './components/HomePage';
import logo from './images/logo-no-background.png';
import Store from './components/Store';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import gr86 from './images/gr86model.jpeg';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [cartNumber, setcartNumber] = useState(0);
  const [cartItems, setcartItems] = useState([]);
  const [cartActive, setcartActive] = useState(false);
  const addToCartCounter = (x) => {
    setcartNumber(cartNumber + x);
  };

  const toggleCartActive = () => {
    setcartActive((prevActive) => !prevActive);
    console.log(cartActive);
  };
  const setCart = (x) => {
    setcartItems([...cartItems, x]);
  };

  return (
    <div>
      <div>
        <div className="header-box">
          <Link to="/">
            <button className="nav-logo">
              <img src={logo} alt="Logo" />
            </button>
          </Link>
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
              <button className="shoppingcart" onClick={toggleCartActive}>
                <img
                  src={shoppingcart}
                  alt="Shopping Cart"
                  className="shoppingcartimg"
                />
              </button>
            </div>
            <div
              className={cartActive ? 'shopping-cart active' : 'shopping-cart'}
            >
              <div className="shopping-cart-name">Shopping Cart</div>
              <button className="shopping-cart-exit" onClick={toggleCartActive}>
                X
              </button>
              {cartItems.map((x) => {
                return (
                  <li>
                    <img src={gr86}></img>
                    {x.name} {x.amount}
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/Store"
          element={
            <Store addToCartCounter={addToCartCounter} setCart={setCart} />
          }
        ></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
