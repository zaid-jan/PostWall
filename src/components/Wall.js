/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../main.css';
import Comments from './Comments';
import action from '../actions/action';

class Wall extends Component {

    constructor() {
        super();
        this.makeList = this.makeList.bind(this);
    }

    makeList() {
        let arr = [];
        arr = this.props.post;
        // let arr = this.props.post;
        const list = arr.map(data => (
                <div key={data.id} className="card">
                    <div className="user">
                        <b>{data.name}</b>
                    </div>
                    <div className="designation">
                        {data.designation}
                    </div>
                    <hr></hr>
                    <div className="text">
                        {data.text}
                        <button
                            compid={data.id}
                            className="likeButton"
                            onClick={this.props.like}
                            style={{ 'float': 'right' }}
                            type="button">{data.userLiked ? 'Unlike' : 'Like'} ({data.likes})
                        </button>
                    </div>
                    <hr></hr>
                    <div className="comments">
                        <Comments data={data}/>
                    </div>
                </div>
            ));

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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        // eslint-disable-next-line no-invalid-this
        'like': action.like
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Wall);
