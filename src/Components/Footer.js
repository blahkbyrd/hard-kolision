import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <div>
        <p className='footer-item'>
          <a className='footer-item-link' href='#'>
            admin
          </a>
        </p>
        <div className='footer-item-mid'>
          <p>Site imaginé par Hard Kolision</p>
          <p>Concocté par blaHKbyrd</p>
          <p className='footer-item'>
            <a className='footer-item-link' href='#'>
              mention legales
            </a>
          </p>
        </div>

        <p className='footer-item'>
          <a className='footer-item-link' href='#'>
            plan du site
          </a>
        </p>
      </div>
    )
  }
}

export default Footer
