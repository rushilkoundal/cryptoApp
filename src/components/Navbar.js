import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/bnb.png'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo flex-align-center"><Link className='flex-align-center' to='/'><h1>crypt</h1><img src={logo} alt="logo" /></Link></div>
            <div className="nav_links flex-direction-column">
                <Link to='/'>Home</Link>
                <Link to='/currencies'>Currencies</Link>
                {/* <Link to='/crypto-details/:coinId'>Crypto Details</Link> */}
                {/* <Link to='/exchanges'>Exchanges</Link> */}
                <Link to='/news'>News</Link>
            </div>
        </div>
    )
}

export default Navbar 