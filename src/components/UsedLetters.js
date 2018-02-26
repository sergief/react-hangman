import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'
import { Container, Icon, Divider } from 'semantic-ui-react'


class UsedLetters extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {letters} = this.props;
    return(
      <Container>
        <Divider/>
        <div className="usedLetter">
          {letters.map( (letter, index) =>{
            return(<Label key="large" size="large" color='orange'> {letter} </Label>)
          })}
        </div>
      </Container>
    )
  }
}

UsedLetters.propTypes = {
  letters: PropTypes.array.isRequired,

}

export default UsedLetters
