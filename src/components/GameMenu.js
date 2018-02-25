import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'



class GameMenu extends Component {
  constructor(props){
    super(props);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewGame(event){
    this.props.onNewGameSelected();
    event.preventDefault();
  }
  render(){
      return (
        <div className="menu-container">
            <Button fluid primary onClick={this.handleNewGame}> Start new game </Button>
        </div>
      )
    }
  }

  GameMenu.propTypes = {
    onNewGameSelected: PropTypes.func.isRequired
  }

  export default GameMenu
