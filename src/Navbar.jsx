import React from 'react'
import { SlBasket } from 'react-icons/sl';
import {AiOutlineSearch} from 'react-icons/ai';


export const Navbar = () => {
  return (
 <div className='container'>
   <div className="navbar">
         <div className="logo">
        PORTEN
         </div>
         <div className="box">
         <ul className='ul'>
     <li><a> <p className='tap' > понравилось </p> </a></li>
     <li><a> <p className='tap' > личный кабинет </p> </a></li>
     <li><a> <p className='tap' > настройки </p> </a></li>
     <li><a>
       <SlBasket/>
     </a></li>
     <li><a>
       <AiOutlineSearch/>
     </a></li>
         </ul>
         </div>
   </div>

  <div className="inside">
    <div className="img">
      <div className="card"> 
        <div className="text"> <h2>PORTEN</h2> </div>
        <div className="text2"> <b> САНКТ-ПЕТЕРБУРГ </b> </div>
      </div>
      <div className="text3"> <b>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis placeat vero l perspiciatis sunt corporis.
        Ea minima repellat maiores quos aliquid repudiandae blanditiis, ipsam impedit labore cum. Officiisv
        dio at aspernatur exercitat Lorem ipsum dolor, sit amet consectetur adipisicing 
        niam delectus laborum totam iste aspernatur pariatur molestiae 
        voluptates praesentium modi asperi
          </b>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Navbar