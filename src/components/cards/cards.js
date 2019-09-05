import React from 'react'
import { connect } from 'react-redux'
import Card from './card'
import './cards.scss'

const Cards = ({ playlist}) => {
              
  let items = playlist.playlist.map(item => {
    return <Card item={ item } key={ item.id }/>
  }) 
  return (
    <div className="music-playlist">
      {items}
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    playlist: state
  }
  
}
export default connect(mapStateToProps)(Cards)