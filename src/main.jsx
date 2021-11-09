import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import './Configs'
import {BrowserRouter as Router}from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <Router forceRefresh={true}>
      <App />
    </Router>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
