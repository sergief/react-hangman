import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import GameContainer from './containers/GameContainer'
import hangmanState from './reducers'
import 'semantic-ui-css/semantic.min.css';

const store = createStore(hangmanState)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <GameContainer store={store}/>,rootEl
)

render()
store.subscribe(render);
