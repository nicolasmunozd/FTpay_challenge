import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducers'
import { compose, legacy_createStore as createStore } from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'))

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composeEnhancers = composeAlt()
const store = createStore(rootReducer,
  composeEnhancers
)

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
