import React, {Component } from 'react';

/*Made course work with newer version of react-bootstrap*/
import {Form, Button} from 'react-bootstrap';

class SearchRecipes extends Component {
    render() {
        return(
            <Form inline>
                <Form.Group>
                    <Form.Label>Ingredients:</Form.Label>
                    {' '}
                    <Form.Control type="text" placeholder="garlic, chicken"></Form.Control>
                </Form.Group>
                {' '}
                <Form.Group>
                    <Form.Label>Recipes:</Form.Label>
                    {' '}
                    <Form.Control type="text" placeholder="adobo"></Form.Control>
                </Form.Group>
                {' '}
                <Button>Submit</Button>
            </Form>
        )
    }
}

export default SearchRecipes;