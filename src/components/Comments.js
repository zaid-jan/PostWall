/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../main.css';

class LC extends Component {
    render() {
        return (
            <div>
                Comments
            </div>            
        )
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
        'makeList': this.makeList
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LC);
