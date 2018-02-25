import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'
import { Container, Icon, Divider } from 'semantic-ui-react'


class Hangman extends Component {
  constructor(props){
    super(props);
    this.state = {letter:''};
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
      document.addEventListener("keydown", this.handleChange);
  }


  componentWillUnmount() {
      document.removeEventListener("keydown", this.handleChange);
  }

  handleChange(event){
    const key = event.key;
    console.log('letter typed:'+key);
    this.setState({letter: ''});
    this.props.onLetterTyped(key);
  }

  render(){
    const {selectedWord, remainingAttempts, gameState, definition} = this.props;
    const showWord = selectedWord.map( elem => elem.visible? elem.letter : '_').join('')
    const hiddenWord = selectedWord.map( elem => elem.letter).join('');

    if(gameState==='GAME_IN_PROGRESS'){
      let remainingLifes = [];
      for (let i = 0; i < remainingAttempts; i++) {
        remainingLifes.push(<Icon name='heart' color = 'red' size = 'big' />);
      }
      return (
        <Container fluid textAlign='center'>
          <div>{remainingLifes}</div>
          <Divider/>
          <div className="word">
            {showWord.split('').map( (letter, index) =>{
              return(<Label key="big" size="big"> {letter} </Label>)
            })}
          </div>
        </Container>
      )
    }
    else if(gameState==='GAME_WON'){
      return(
        <Message info>
        <Message.Header>You Win!</Message.Header>
        {hiddenWord}: {definition}
        </Message>
      )
    }
    else if(gameState==='GAME_LOST'){
      return(
        <Message negative>
        <Message.Header>Game Over</Message.Header>
        {hiddenWord}: {definition}
        </Message>
      )
    }
  }
}

Hangman.propTypes = {
  selectedWord: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  gameState: PropTypes.string.isRequired,
  remainingAttempts: PropTypes.number.isRequired,
  onLetterTyped: PropTypes.func.isRequired
}

export default Hangman
