import React from 'react';
import {GiLindenLeaf} from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to='/'>
      <div className="navbar">
        <GiLindenLeaf className='icon' />
        <h1>Crypto <span className='green'>Nummum</span></h1>
      </div>
    </Link>
  )
}

export default Navbar