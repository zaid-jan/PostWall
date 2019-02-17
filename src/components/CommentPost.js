/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../main.css';
import action from '../actions/action';

class CommentPost extends Component {

    constructor() {
        super();
        this.makeList = this.makeList.bind(this);
    }

    makeList() {
        let id = this.props.id
        let arr = [];
        let index = this.props.post.findIndex( obj => {
            return obj.id == id
        })
        let name = this.props.post[index].name;
        arr = this.props.post[index].comments;
        console.log(arr)
        let count = 0
        const list = arr.map(data => {
            count += 1
            return (
                <div key={count} className="comment">
                <div className="user">
                    <b>{name}</b> : {data}
                </div>
            </div>
            )
                
        }   );

        return list;
    }

    render() {
        const comp = this.makeList();
        
            return (
                <div>
                    {comp}
                </div>
            );
    }
}

function mapStateToProps(state) {
    return {
            'post': state.post
        };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         // eslint-disable-next-line no-invalid-this
//         'like': action.like
//     }, dispatch);
// }
export default connect(mapStateToProps)(CommentPost);
