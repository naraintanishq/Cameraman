import React, {useContext} from 'react';

import {ImFacebook, ImTwitter, ImPinterest, ImInstagram, ImYoutube } from 'react-icons/im'

import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href ="https://www.facebook.com" target='_blank' rel="noreferrer">
          <ImFacebook />
        </a>
      </li>
      <li>
        <a href ="https://www.x.com" target='_blank' rel="noreferrer">
          <ImTwitter />
        </a>
      </li>
      <li>
        <a href ="https://www.pinterest.com" target='_blank' rel="noreferrer">
          <ImPinterest />
        </a>
      </li>
      <li>
        <a href ="https://www.youtube.com" target='_blank' rel="noreferrer">
          <ImYoutube />
        </a>
      </li>
      <li>
        <a href ="https://www.instagram.com" target='_blank' rel="noreferrer">
          <ImInstagram />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
