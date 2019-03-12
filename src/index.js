import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './views/App'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { fetchBooks } from './actions'

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

store.dispatch(fetchBooks()).then(() => console.log(store.getState()))