import React from 'react';
import Nav from '../../Images/logo.png'
import './Navbar.css'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav class="bg-[#171C2A] py-4">
          <div class="navBar">
            <Link to='/'>
              <img src={Nav} alt="LWS" class="max-w-[140px]" />
            </Link>
      
            <div class="flex gap-4">
              <Link to='/'  class="navHome" id="lws-home"> Home </Link>
              <Link to='/cart' class="navCart" id="lws-cart">
                <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                <span id="lws-totalCart">0</span>
              </Link>
            </div>
          </div>
        </nav>
    );
};

export default Navbar;