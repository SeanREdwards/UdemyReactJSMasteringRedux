import React, { Component } from 'react';
import { connect } from 'react-redux';

////Used shortcut in export so didn't need this.
//import { bindActionCreators } from 'redux';
import { addCharacterById } from '../Actions';

class CharacterList extends Component {
  render() {
    console.log('this.props', this.props);

    return (
      <div>
        <h4>Characters:</h4>
        <ul className="list-group">
          {
            this.props.characters.map(character => {
              return (
                <li key={character.id} className="list-group-item">
                  <div className="list-item">{character.name}</div>
                  <div
                    className="list-item right-button"
                    onClick={() => this.props.addCharacterById(character.id)}
                  >
                    +
                  </div>

                  {/* Extending app by adding stats to each character*/}
                  <div>
                    Strength: {character.strength} | Intelligence: {character.intelligence} | Speed: {character.speed}
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

////Used shortcut in export so didn't need this.
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addCharacterById }, dispatch)
// }

export default connect(mapStateToProps, { addCharacterById })(CharacterList);