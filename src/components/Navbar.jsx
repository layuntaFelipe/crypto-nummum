import React from 'react';
import {GiLindenLeaf} from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <GiLindenLeaf className='icon' />
        <Link to='/'>
          <h1>Crypto <span className='green'>Nummum</span></h1>
        </Link>
    </div>
  )
}

export default Navbar