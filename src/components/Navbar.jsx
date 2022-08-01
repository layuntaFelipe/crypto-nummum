import React from 'react';
import {GiLindenLeaf} from 'react-icons/gi'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <GiLindenLeaf className='icon' />
        <h1>Crypto <span className='green'>Nummum</span></h1>
      </div>
    </div>
  )
}

export default Navbar