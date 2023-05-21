import React from 'react'
import { SlBasket } from 'react-icons/si';


export const Navbar = () => {
  return (
    <div className='container'>
        <div className="box">
      <ul>
  <li><a>понравилось</a></li>
  <li><a>личный кабинет</a></li>
  <li><a>настройки</a></li>
  <li><a>
  <SlBasket/>
  </a></li>
  <li><a></a></li>
      </ul>


        </div>


    </div>
  )
}

export default Navbar
