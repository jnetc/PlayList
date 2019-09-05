import React, { Component } from 'react';
import Cards from './cards'
import './App.scss';

class App extends Component {

  state = {
    musicList: [
      { id: Math.floor(Math.random() * 100000),
        artist: 'Metallica',
        song: 'Nothing Else Matters',
        album: 'Metallica',
        year: '1991',
        img: 'https://www.metallica.com/dw/image/v2/BCPJ_PRD/on/demandware.static/-/Sites-Metallica-Library/default/dw6bb7f7c2/images/releases/20150806_195125_7549_752582.jpg?sw=372&sh=372&sm=cut&sfrm=jpeg&q=95',
        like: false },
      { id: Math.floor(Math.random() * 100000),
        artist: 'Eminem',
        song: 'Love the Way You Lie',
        album: 'Recovery',
        year: '2010',
        img: 'https://www.thoughtco.com/thmb/pfeYVBwBfefQ3g3p5hH0lBSVLM4=/1417x0/filters:no_upscale():max_bytes(150000):strip_icc()/the_marshall_mathers_lp_is-56a7d8173df78cf77299db4d.jpg',
        like: false },
      { id: Math.floor(Math.random() * 100000),
        artist: 'Halestorm',
        song: 'I Am The Fire',
        album: 'Into the Wild Life',
        year: '2015',
        img: 'https://upload.wikimedia.org/wikipedia/ru/9/95/HalestormA.jpeg',
        like: false },
      { id: Math.floor(Math.random() * 100000),
        artist: 'Imagine Dragons',
        song: 'Thunder',
        album: 'Evolve',
        year: '2017',
        img: 'https://s3.amazonaws.com/busites_www/woodlandscenter2016com/pages/Imagine%20Dragons%20-%20Event%20Square.png',
        like: false }
    ]

  }
  render() {
    return (
      <div className="app">
        <Cards playlist={ this.state.musicList }/>
      </div>
    );
  }
}

export default App;
