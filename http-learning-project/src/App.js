import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  // The basename property on BrowserRouter tag sets the baseUrl for the React application
  // By default basename is set to '/'
  render() {
    return (
      <BrowserRouter basename="/">
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
