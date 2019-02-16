import React, {Component} from "react";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/action'
import '../main.css'

class PostBar extends Component {       
    render() {
        return(
            <div className='postBar'>
                {/* <input type='text' name='text' id='text'></input> */}
                <textarea rows="6" cols="150" name='text' id='text' placeholder="Whats On Yo Mind?"></textarea>
                <br></br>
                <button id='postBarButton' onClick={this.props.post} name='button' type="submit">Post</button>
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