import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Hangman from './components/Hangman'
import GameMenu from './components/GameMenu'
import UsedLetters from './components/UsedLetters'
import hangmanState from './reducers'
import {selectLetter, selectWord} from './actions'
import logo from './logo.svg';
import Dictionary from './data/dictionary.json'
import 'semantic-ui-css/semantic.min.css';
const getRandomWord = () =>{
  let ret,
    count = 0;
    for (let prop in Dictionary)
        if (Math.random() < 1/++count)
           ret = prop;
    return {word: ret.toUpperCase(), definition: Dictionary[ret]};
}

const store = createStore(hangmanState)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <div className="container-app">
    <GameMenu
      onNewGameSelected = { ()=>{store.dispatch(selectWord(getRandomWord()))}}
    />
    <Hangman
      remainingAttempts = {store.getState().remainingAttempts}
      definition = {store.getState().definition}
      gameState = {store.getState().gameState}
      onLetterTyped = {letter => {store.dispatch(selectLetter(letter.toUpperCase())) }}
      selectedWord = {store.getState().word}
    />
    <UsedLetters
      letters = {store.getState().letters}
    />
</div>, rootEl

)

render()
store.subscribe(render);
