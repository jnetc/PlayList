import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import { Provider } from 'react-redux'
import createStore from './store/store'
import { getPlayListFromFirestore } from './actions/actions'

const store = createStore
const app = (
  <Provider store={ store }>
    <App/>
  </Provider>
)
ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))
store.dispatch(getPlayListFromFirestore()).then(() => {
    ReactDOM.render(app, document.getElementById('root'))
  })