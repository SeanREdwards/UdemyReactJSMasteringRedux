import React, {Component} from 'react'

import SearchRecipes from './SearchRecipes';
import '../Styles/index.css'

class App extends Component{
    render(){
        return(
            <div>
                <h2>Recipe Finder</h2>
                <SearchRecipes/>
            </div>
        )
    }
}

export default App;