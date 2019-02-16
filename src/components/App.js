import React, { Component } from 'react';
import PostBar from "./postBar";
import Wall from './Wall'
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
