import React from 'react';
import logo from '../../assets/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const[toggleMenue,settoggleMenue]=useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3--navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>

        <div className='gpt3--navbar-links-container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is gpt3?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
        </div>

        <div className='gpt3--navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>

        <div className='gpt3--navbar-menue'>
          {toggleMenue
          ?<RiCloseLine size={27} color='#fff' onClick={()=>settoggleMenue(false)}/>
          :<RiMenu3Line size={27} color='#fff' onClick={()=>settoggleMenue(true)}/>}

          {toggleMenue &&(
            <div className='gpt3--navbar-menue_container scale-up-center'>
              <div className='gpt3--navbar-menue_container-links'>
              <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
          </div>
          )}
        </div>
    </div>
  );
};

export default Navbar;
