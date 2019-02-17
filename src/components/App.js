/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import PostBar from './postBar';
import Wall from './Wall';

class App extends Component {
  render() {
    return (
      <div>
        <PostBar />
        <Wall />
      </div>
    );
  }
}

export default App;
