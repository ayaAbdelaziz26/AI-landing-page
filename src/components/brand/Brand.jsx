import React from 'react';
import './brand.css';
import google from '../../assets/google.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';

const Brand = () => {
  return (
    <div className='gpt3--brand'>
      <div>
        <img src={google}/>
      </div>

      <div>
        <img src={slack}/>
      </div>

      <div>
        <img src={atlassian}/>
      </div>

      <div>
        <img src={dropbox}/>
      </div>

      <div>
        <img src={shopify}/>
      </div>
    </div>
  )
}

export default Brand
