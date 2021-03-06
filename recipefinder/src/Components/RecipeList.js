import React, { Component } from 'react';
import {connect } from 'react-redux'
import{ Link } from 'react-router-dom';

import RecipeItem from './RecipeItem';

class RecipeList extends Component {
    render(){
        console.log('this.props', this.props)

        return(
        <div>
            {
                this.props.favoriteRecipes.lengthj > 0 ?
                    <h4 className="link"><Link to='/favorites'/>Favorite Recipes</h4>
                :
                    <div/>
            }
            {this.props.recipes.map((recipe, index) => {
                return(
                    <RecipeItem 
                        key={index} 
                        recipe={recipe}
                        favoriteButton={true}
                    />
                )
            })
            }
        </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, null)(RecipeList);