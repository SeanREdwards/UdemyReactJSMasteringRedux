import React, {Component } from 'react';

/*Made course work with newer version of react-bootstrap*/
import {Form, Button} from 'react-bootstrap';

import { connect } from 'react-redux'
import { setRecipes } from "../Actions"

class SearchRecipes extends Component {
    constructor() {
        super();

        this.state = {
            ingredients: '',
            dish: ''
        }
    }


    /*
    *Seems that recipepuppy is no longer being maintained. Can potentially emulate with Spoontacular
    *TODO: research alternative recipe api
    */
    search(){
        let {ingredients, dish} = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => this.props.setRecipes(json))
    }

    render() {
        return(
            <Form inline>
                <Form.Group>
                    <Form.Label>Ingredients:</Form.Label>
                    {' '}
                    <Form.Control 
                        type="text" 
                        placeholder="garlic, chicken" 
                        onChange={event => this.setState({ingredients: event.target.value})}
                    />
                </Form.Group>
                {' '}
                <Form.Group>
                    <Form.Label>Dish:</Form.Label>
                    {' '}
                    <Form.Control 
                    type="text" 
                    placeholder="adobo" 
                    onChange={event => this.setState({dish: event.target.value})}
                    />
                </Form.Group>
                {' '}
                <Button onClick={() => this.search()}>Submit</Button>
            </Form>
        )
    }
}

export default connect(null, { setRecipes})(SearchRecipes);