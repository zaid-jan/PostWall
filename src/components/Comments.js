/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../main.css';
import actions from '../actions/action'
import CommentPost from './CommentPost';

class Comments extends Component {

    constructor() {
        super();
        this.comment = '';
        this.setComment = this.setComment.bind(this)
    }
    setComment(event) {
        console.log("id", this.props.data.id)
        this.comment = event.target.value;
    }

    render() {
        return (
            <div>
                <textarea
                    onChange={this.setComment}
                    rows="4"
                    cols="120"
                    name="text"
                    id="comment"
                    placeholder="Say Something Nice">
                </textarea>
                <br></br>
                <button className="commentsButton"
                    // eslint-disable-next-line object-property-newline
                    onClick={() => this.props.comment({ 'compid': this.props.data.id, 'id':'comment', 'text': this.comment })}
                    name="button"
                    type="submit">
                        Comment
                </button>
                <br></br>
                <CommentPost id={this.props.data.id}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        'post': state.post
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        'comment': actions.comment
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
