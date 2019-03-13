import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './views/App'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.subscribe(a => console.log(store.getState()))
