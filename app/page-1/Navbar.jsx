"use client"
import React from 'react'
import './Universal.css'
import { showSidebar } from '../src/utils/Function';
import { hideSidebar } from '../src/utils/Function';

function Navbar() {
  return (
    <header>
    <div className='nav-box'>
      <nav>
        <ul className='sidebar'>
          <li className='close' onClick={hideSidebar}><a href='#'><img src='icon.png'></img></a></li>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Categories</a></li>
          <li><a href='#'>News</a></li>
          <li><a href='#'>Log-in</a></li>
        </ul>
        <ul className='navbar'>
          <li><a href='#'><h1>Unreal-Assets</h1></a></li>
          <li className='hideonmobile'><a href='#'>Home</a></li>
          <li className='hideonmobile'><a href='#'>About</a></li>
          <li className='hideonmobile'><a href='#'>Categories</a></li>
          <li className='hideonmobile'><a href='#'>News</a></li>
          <li className='hideonmobile'><a href='#'>Log-in</a></li>
          <li className='menu' onClick={showSidebar}><a href="#"><img src='menu2.jpg'></img></a></li>
        </ul>
      </nav>
    </div>
    </header>
  );
}


export default Navbar;
// Compare this snippet from unreal-app/app/page-1/Navbar.js: