import React from 'react'
import { Link, Route } from 'react-router-dom';
import { FaBeer } from "react-icons/fa";
import { SiAltiumdesigner } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import CartPage from '../pages/Cart'
export default function ENav() {
  const cartItems =useSelector(state=>state.cart.cart)
  return (
    // <div className='header'>
    // <div className='top-header'>
    // <span className='icon'  style={{ color: 'yellow',background:'black',size:'40px',padding:'5px',justifyContent:'center',width:'20px',height:'20px',display:'inline-flex',alignItems:'center'}}>
    //     <SiAltiumdesigner />
    // </span>
    // <div className='info'>
    //     <p className='brand'>Slay Srtore</p>

    // </div>
    // </div>
    // </div>
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <SiAltiumdesigner /> Slay Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/">All</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to={`/categories?cat=electronics`} >Electronics</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to={`/categories?cat=jewelery`} >Jewelery</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to={`/categories?cat=men's clothing`} >Men's clothing</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to={`/categories?cat=women's clothing`} >Women's clothing</Link></li>
            </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex" style={{margin:'0 10px 0 0'}}>
      
     <Link to="/cart" style={{color:'black',textDecoration:'none'}}>
     
        <p className='Cartlength' style={{margin:'0'}}>
        {cartItems.length}

        </p>
        <FaShoppingCart />
        </Link>
      </form>
    </div>
  </div>
</nav>
</>
  )
}
