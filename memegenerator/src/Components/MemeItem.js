import React, { Component } from 'react';
import {connect} from 'react-redux'
import { createMeme } from '../Actions'

class MemeItem extends Component{
    constructor(){
        super();

        this.state = {
            hovered: false
        }
    }

    postMeme(){
        console.log('this.props', this.props);
        const {text0, text1} = this.props;
        const memeObject = {
            template_id: this.props.meme.id,
            text0, 
            text1
        }
        this.props.createMeme(memeObject);
    }

    render(){
        return(
            <div 
                className="meme-item"
                onMouseEnter={() => this.setState({hovered: true})}
                onMouseLeave={() => this.setState({hovered: false})}
                onClick={() => this.postMeme()}
            >
                <img 
                    className={this.state.hovered ? "meme-img darkened-img" : "meme-img"}
                    src={this.props.meme.url}
                    alt={this.props.meme.name}
                />
                <p className={this.state.hovered ? "meme-text" : "no-text"}>
                    {this.props.meme.name}
                </p>
            </div>
        )
    }
}

export default connect(null, { createMeme })(MemeItem);