import React, { Component } from 'react'
import './card.scss'

export default class Card extends Component {
  render() {
    const { artist, song, album, year, img } = this.props.item

    return (
      <div className="box-list">
        <figure>
          <img src={ img } alt={ artist }/>
          <figcaption/>
        </figure>
        <div className="content">
          <h4 className="artist">{ artist }</h4>
          <h3 className="song">{ song }</h3>
          <span className="album">{ album }</span>
          <span className="year">{ year }</span>
        </div>
        <div className="play-controller">
          <div className="step-backward">
            <i className="fas fa-step-backward"></i>
          </div>
          <div className="play-pause">
            <i className="fas fa-play"></i>
          </div>
          <div className="step-foward">
            <i className="fas fa-step-forward"></i>
          </div>
        </div>
      </div>
    )
  }
}