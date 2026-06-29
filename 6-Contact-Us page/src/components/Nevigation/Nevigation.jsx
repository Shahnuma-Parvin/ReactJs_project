import React from 'react'
import style from "./Nevigation.module.css";

const Nevigation = () => {
  return (
      <nav className= {`${style.nevigation} container`}>
        <div>
            <img src='/images/Frame 2 1.png'/>
        </div>
        <ul>
            <li>Home</li>
             <li>About</li>
            <li>Contact</li>

        </ul>
      </nav>
  )
}

export default Nevigation
