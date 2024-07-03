import React from 'react'
import { useState ,useEffect} from 'react';
import { Link, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Enav from '../components/ENav'
export default function Product(prod) {
    const dispatch = useDispatch();
    const [mainProd, setMainProd] = useState({});
    
  const query =  new URLSearchParams(useLocation().search);
  const productId = query.get('id');

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
          const jsondata = await response.json();
          setMainProd(jsondata);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProduct();

    }, []);
  return (<>
  <Enav/>
  <h3 style={{margin:'1rem'}}>Know more About the Product</h3>
    <div style={{display:'flex',flexDirection:'row'}}>
      <img src={mainProd.image}  style={{width:'34rem',height:'38rem',margin:'2rem'}} />
      <div style={{width:"100%",height:'90vh',padding:'2rem'}}>
            <h4>{mainProd.title}</h4>
            <p style={{width:'34rem'}}>{mainProd.description}</p>
            <h5 style={{textDecoration:'line-through'}}>Price : $ {mainProd.price * 1.8}</h5>
            <h4 >Price : $ {mainProd.price }</h4>
            <p style={{padding:'7px',background:'orange',display:'inline-flex',borderRadius:'5px'}}>Category : {mainProd.category}</p>
            <br/>
            <p style={{padding:'7px',background:'green',display:'inline-flex',borderRadius:'5px',color:'white'}}>Rating : 4.3</p>
            <br/>
            <button onClick={() => dispatch(addToCart(mainProd))} type="button" className="btn btn-primary">
          Add To Cart &nbsp; <FaShoppingCart />
        </button>
      </div>
    </div>
  </>
  )
}
