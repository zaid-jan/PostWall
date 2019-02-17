/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../main.css';

class Wall extends Component {
    makeList() {
        let arr = [];
        arr = this.props.post;
        // let arr = this.props.post;
        const list = arr.map(data => (
                <div key={data.id}>
                    <div className="card">
                        {data.text}
                    </div>
                    <div className="bottomBar">
                        {data.likes}
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
        'makeList': this.makeList
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Wall);
