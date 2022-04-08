import React, { Component } from 'react'
import AudioPlayer from './Radio/AudioPlayer'
import flyer from './../images/flyers/201010 balka.jpg'

class Aside extends Component {
  render () {
    return (
      <div className='aside'>
        <div className='actu-container'>
            <h1 id="toMove">actus</h1>
          <div className='concert-actu-container'>
            <h2 id='toMove2'>concerts</h2>
            <img src={flyer} alt='flyer'/>
          </div>
          <div className='radio-actu-container'>
            <h2>radio</h2>
            <AudioPlayer />
          </div>
        </div>
        <div className='friend-container'>
            <h1>Les Keupains</h1>
          <div className='concert-actu-container'>
            <h2>actus</h2>
            <div className='actus-friend'></div>
          </div>
          <div className='radio-actu-container'>
            <h2>album</h2>
            <AudioPlayer />
          </div>
        </div>
      </div>
    )
  }
}

export default Aside
