import './App.css';
import shoppingcart from './images/shopping-cart.png';
import HomePage from './components/HomePage';
import logo from './images/logo-no-background.png';
import Store from './components/Store';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import gr86 from './images/gr86model.jpeg';
import Item from './components/Item';
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
    //Check if Item exists, returns true if it does
    const itemExists = cartItems.some((item) => item.name === x.name);

    //runs if item exists
    if (itemExists) {
      const newCart = cartItems.map((item) => {
        if (item.name === x.name) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      setcartItems(newCart);
    } else {
      //creates new if exists
      const newCart = [...cartItems, { ...x, amount: 1 }];

      setcartItems(newCart);
    }
    console.log(cartItems);
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
              {/* Maps the shopping cart*/}
              {cartItems.map((x) => {
                return (
                  <li>
                    <div className="cart-item">
                      <img src={gr86} alt="gr86"></img>
                      {x.name} {x.amount}
                    </div>
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
        <Route
          path="/Store/gr86"
          element={
            <Item addToCartCounter={addToCartCounter} setCart={setCart} />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
