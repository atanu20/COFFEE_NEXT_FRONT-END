// import React from 'react';
import Link from 'next/link';
const NavBar = () => {
  const Search = () => {
    let searchForm = document.querySelector('.search-form');
    let navbar = document.querySelector('.navbar');
    let cartItem = document.querySelector('.cart-items-container');

    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
  };
  const Cart = () => {
    let searchForm = document.querySelector('.search-form');
    let navbar = document.querySelector('.navbar');
    let cartItem = document.querySelector('.cart-items-container');

    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
  };
  const MenuBtn = () => {
    let searchForm = document.querySelector('.search-form');
    let navbar = document.querySelector('.navbar');
    let cartItem = document.querySelector('.cart-items-container');

    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
  };

  if (typeof window !== 'undefined') {
    window.onscroll = () => {
      let searchForm = document.querySelector('.search-form');
      let navbar = document.querySelector('.navbar');
      let cartItem = document.querySelector('.cart-items-container');

      navbar.classList.remove('active');
      searchForm.classList.remove('active');
      cartItem.classList.remove('active');
    };
  }

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src="images/logo.png" alt="" />
        </a>

        <nav className="navbar">
          <Link href="#">
            <a>Home</a>
          </Link>
          <Link href="#about">
            <a>About</a>
          </Link>
          <Link href="#menu">
            <a>Menu</a>
          </Link>
          <Link href="#products">
            <a>Products</a>
          </Link>

          <Link href="#review">
            <a>Review</a>
          </Link>
          <Link href="#contact">
            <a href="#contact">Contact</a>
          </Link>
          <Link href="#blogs">
            <a href="#blogs">Blogs</a>
          </Link>
        </nav>

        <div className="icons">
          <div className="fas fa-search" id="search-btn" onClick={Search}></div>
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={Cart}
          ></div>
          <div className="fas fa-bars" id="menu-btn" onClick={MenuBtn}></div>
        </div>

        <div className="search-form">
          <input type="search" id="search-box" placeholder="search here..." />
          <label for="search-box" className="fas fa-search"></label>
        </div>

        <div className="cart-items-container">
          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src="images/cart-item-1.png" alt="" />
            <div className="content">
              <h3>cart item 01</h3>
              <div className="price">$15.99/-</div>
            </div>
          </div>
          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src="images/cart-item-2.png" alt="" />
            <div className="content">
              <h3>cart item 02</h3>
              <div className="price">$15.99/-</div>
            </div>
          </div>
          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src="images/cart-item-3.png" alt="" />
            <div className="content">
              <h3>cart item 03</h3>
              <div className="price">$15.99/-</div>
            </div>
          </div>
          <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src="images/cart-item-4.png" alt="" />
            <div className="content">
              <h3>cart item 04</h3>
              <div className="price">$15.99/-</div>
            </div>
          </div>
          <a href="#" className="btn">
            checkout now
          </a>
        </div>
      </header>
    </>
  );
};

export default NavBar;
