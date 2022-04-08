import React, { Component } from 'react'
import Carousel from './../Components/Carousel/Carousel'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <div className='who-are-we'>
          <h1 className='title-who-are-we'>KiKonest ?</h1>
          <p className='text-who-are-we'>
            HK c'est un soap-opéra hardcore <br />
            HK est sexuellement transmissible <br />
            HK organise des concerts, des expos et même que les gens viennent
            <br />
            HK est une tâche de merde collée au cul de la culture nantaise
            <br />
            HK est une flaque de mazout au milieu de la piscine de Jean-Marc
            Ayrault
            <br />
            HK c'est la politesse incarnée dans un ongle purulent et mycosique
            <br />
            HK est plus proche des parties génitales que du parti socialiste
            <br />
            HK fait de la radio et va bientôt conquérir le monde
            <br />
            HK survivra à a bombe atomique, mais pas aux drogues chimiques
            <br />
            HK décline toute responsabilité en cas d'exposition trop importante
            ou d'absorption involontaire
            <br />
            HK est Mégalo, mais avec une pointe de pastis
            <br />
            HK aime taper sur tout le monde et surtout sur elle-même
            <br />
            HK trie ses déchets mais a du mal à sortir de la poubelle
            <br />
            HK aime ses voisins qui sont des gens bien, mais fait du bruit et
            c'est pas gentil
            <br />
            HK c'est une cellule de regrisement
            <br />
            HK c'est du Sang, du Cul, des Nichons.
            <br />
            <span>Avant HK, il n'y avait rien. Après ce sera pire.</span>{' '}
          </p>
        </div>
        <Carousel />
      </div>
    )
  }
}

export default Home
