import React from 'react';
import Nav from '../../Images/logo.png'
import './Navbar.css'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const cart = useSelector((state) => state.cart
    )
    return (
        <nav class="bg-[#171C2A] py-4">
          <div class="navBar">
            <Link to='/'>
              <p className='text-white uppercase'>Shopping <span className='text-red-500'>Cart</span></p>
            </Link>
      
            <div class="flex gap-4">
              <Link to='/'  class="navHome" id="lws-home"> Home </Link>
              <Link to='/cart' class="navCart" id="lws-cart">
                <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                <span id="lws-totalCart">{cart?.length}</span>
              </Link>
            </div>
          </div>
        </nav>
    );
};

export default Navbar;