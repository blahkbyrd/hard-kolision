// external libraries imports
import React, { Component } from 'react';
// local imports
import Nav from './Navigation/Nav';
import logo from './../images/logo.png'

class Header extends Component {
    render() {
        return (
            <div>
                <div className='logo-container'>
                    <img src={logo} alt='logo' className='logo-image'/>
                </div>
                <div className='banner'>
                    <h1 className='banner-title'>HARD KOLISION</h1>
                    <p className='banner-slogan'>du punk, du metal</p>
                </div>
                <Nav />
            </div>
        );
    }
}

export default Header;