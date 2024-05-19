import React from 'react';
import { Navbar,Brand,CTA, Article } from './components';
import {Blog,Footer,Header,WhatGPT3,Features,Possibility} from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient--bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App;
