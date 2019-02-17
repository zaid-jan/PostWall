import React, {Component} from "react";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/action'
import '../main.css'

class PostBar extends Component {    
    constructor() {
        super()
        this.text = ''
        this.setText = this.setText.bind(this)
    }
    setText(event) {
        this.text = event.target.value;
    }   
    render() {
        return(
            <div className='postBar'>
                <textarea 
                    onChange={this.setText} 
                    rows="6" 
                    cols="150" 
                    name='text' 
                    id='text' 
                    placeholder="Whats On Yo Mind?">
                </textarea>
                <br></br>
                <button id='postBarButton' 
                    onClick={() => this.props.post({text: this.text, id:'text'})} 
                    name='button' 
                    type="submit">
                        Post
                </button>
                <hr></hr>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: state.post,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        post: actions.post,
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostBar)