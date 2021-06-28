import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../Actions';

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad:</h4>
        <ul className="list-group">
          {
            this.props.heroes.map(hero => {
              return (
                <li key={hero.id} className="list-group-item">
                  <div className="list-item">
                    {hero.name}
                  </div>
                  <div 
                    className="list-item right-button"
                    onClick={() => this.props.removeCharacterById(hero.id)}
                  >
                    x
                  </div>

                  {/* Extending app by adding stats to each character*/}
                  <div>
                    Strength: {hero.strength} | Intelligence: {hero.intelligence} | Speed: {hero.speed}
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
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, { removeCharacterById })(HeroList);