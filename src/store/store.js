import { createStore, combineReducers, applyMiddleware } from 'redux'
import { getMusicList } from '../reducer/reducers'
import thunk from 'redux-thunk'

export default createStore(
  combineReducers({
    playlist: getMusicList
  }),
  applyMiddleware(thunk)
)