import React, { Component } from 'react'

class AudioPlayer extends Component {
  constructor () {
    super()
    this.reference = 20220128
    this.jetFm = 'http://jetfm.fr/live'
    this.podcast = `http://jetfm.fr/site/stockage/emissions%20benevoles/2021-2022/l%20heure%20kolision/HeureKolision_${this.reference}.mp3`
    this.date = new Date().getDay()
  }
  source (date) {
    if (this.date == 5) {
      return this.jetFm
    } else {
      return this.podcast
    }
  }
  render () {
    return (
      <div className='audio-player'>
        <audio
          controls
          style={{ maxWidth: 100 + '%', borderRadius: 25 + 'px' }}
        >
          <source src={this.source(this.date)} type='audio/mp3' />
        </audio>
      </div>
    )
  }
}

export default AudioPlayer
