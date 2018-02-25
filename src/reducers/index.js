const hangmanState = (state = {
  word: [],
  remainingAttempts: 10,
  letters: [],
  //gameState: 'WAITING_FOR_WORD'
  gameState: 'GAME_IN_PROGRESS',
  word: [{letter: 'H', visible: false},{letter: 'E', visible: false},{letter: 'L', visible: false},{letter: 'L', visible: false},{letter: 'O', visible: false}]

}, action) => {
  switch(action.type){
    case 'WORD_SELECTED':
      return {
        gameState: 'GAME_IN_PROGRESS',
        word: action.word.split('').map(letter=>{
           return {letter: letter, visible: false}
        }),
        definition: action.definition,
        letters: [],
        remainingAttempts: 10
      }
    case 'LETTER_SELECTED':
      if(state.gameState!=='GAME_IN_PROGRESS'){
        return state;
        //game not running, no effect on that
      }
      if(state.letters.includes(action.letter)){
        return state;
        //letter previously said
      }

      if(state.word.map(elem=>{return elem.letter}).includes(action.letter)){
        //correct letter, unhide it
        let won = true;
        return {
          ...state,
          word: state.word.map(element =>{
            let elem = {... element};

            if(elem.letter === action.letter){
              elem.visible  = true
            }
            if(!elem.visible)
              won = false;

            return elem
          }),
          gameState : won ? 'GAME_WON' : 'GAME_IN_PROGRESS'
        };
      }
      else{
        //incorrect word
        return {
          ...state,
          letters: state.letters.concat([action.letter]),
          remainingAttempts: state.remainingAttempts-1,
          gameState: state.remainingAttempts > 0 ? 'GAME_IN_PROGRESS' : 'GAME_LOST'
        }
      }

    default:
      return state
  }
}

export default hangmanState
