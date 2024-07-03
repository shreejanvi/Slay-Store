import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function Card({ prod }) {
  const dispatch = useDispatch();

  return (
    <div className="card" style={{ padding: '20px', width: '18rem',alignItems:'center' }}>
      <img src={prod.image} style={{ height: '10rem', width: '7rem' }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{prod.title}</h5>
        <p className="card-text">{prod.description.split(' ').slice(0, 12).join(' ')}...</p>
        <button onClick={() => dispatch(addToCart(prod))} type="button" className="btn btn-primary">
          Add <FaShoppingCart />
        </button> &nbsp;
        <Link to={`/product?id=${prod.id}`} type="button" className="btn btn-primary">
          View Product
        </Link>
      </div>
    </div>
  );
}
