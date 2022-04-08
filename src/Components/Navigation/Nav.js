//  external libraries import
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render () {
    return (
      <div className='nav-header'>
        <ul className='nav-header-list'>
          <li>
            <Link className='nav-header-link' to='/'>
              accueil
            </Link>
          </li>
          <li>
            <Link className='nav-header-link' to='/events'>
              events
            </Link>
          </li>
          <li>
            <Link className='nav-header-link' to='/radio'>
              radio
            </Link>
          </li>
          <li>
            <Link className='nav-header-link' to='/contact'>
              contact
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav
