import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { store } from './CartSlice';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Paradise Nursery
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/plants">Plants</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-icon-wrapper">
            <span className="cart-icon">🛒</span>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}


function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/plants');
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1> Paradise Nursery</h1>
        <p className="tagline">Where Every Home Finds Its Green Paradise</p>
        <p className="subtitle">
          Welcome to Paradise Nursery — your one-stop shop for beautiful,
          healthy houseplants. From lush tropicals to easy-care succulents,
          we have the perfect plant to brighten your space.
        </p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started →
        </button>
      </div>
    </div>
  );
}


function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main-content">{children}</main>
    </>
  );
}


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/plants"
            element={
              <Layout>
                <ProductList />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <CartItem />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;