import React from 'react'
import { SlBasket } from 'react-icons/sl';
import {AiOutlineSearch} from 'react-icons/ai';


export const Navbar = () => {
  return (
    <div className='container'>
      <div className="logo">
        <h3>PORTEN</h3>
      </div>
        <div className="box">
      <ul>
  <li><a>понравилось</a></li>
  <li><a>личный кабинет</a></li>
  <li><a>настройки</a></li>
  <li><a>
    <SlBasket/>
  </a></li>
  <li><a>
    <AiOutlineSearch/>
  </a></li>
      </ul>


        </div>


    </div>
  )
}

export default Navbar
