import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'
// Person can be any name, but it convention to use the same name as the component Name
// But component name should always start with capital, as it will be used as tag -> Person, Animal
// In react, the tags starting from smaller case are considered as tags -. eg: div, p, br, hr, table, etc 
class App extends Component {
  render() {
    // className is restriction of JSX as class is a reserved keyword in JS
    return (
      // This is similar to HTML but it is actually JSX
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person />
        <Person></Person>
      </div>
      // <h1> Another Heading</h1> ->
      // As JSX can have only one root element
    );
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
    // return React.createElement('div', null, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));

  }
}

export default App;
