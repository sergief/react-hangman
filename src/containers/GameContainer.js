import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hangman from '../components/Hangman'
import GameMenu from '../components/GameMenu'
import UsedLetters from '../components/UsedLetters'
import {selectLetter, selectWord} from '../actions'
import Dictionary from '../data/dictionary.json'
import 'semantic-ui-css/semantic.min.css';

class GameContainer extends Component {
    constructor(props){
        super(props);
    }
    getRandomWord(){
        let ret,
            count = 0;
        for (let prop in Dictionary)
            if (Math.random() < 1/++count)
                ret = prop;
        return {word: ret.toUpperCase(), definition: Dictionary[ret]};
    }
    render(){
        const {store} = this.props;
        return (<div className="container-app">
            <GameMenu
                onNewGameSelected = { ()=>{store.dispatch(selectWord(this.getRandomWord()))}}
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
        </div>)
    }
}

GameContainer.propTypes = {
    store: PropTypes.object.isRequired,

}

export default GameContainer
