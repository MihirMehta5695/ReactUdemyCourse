import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'
// Person can be any name, but it convention to use the same name as the component Name
// But component name should always start with capital, as it will be used as tag -> Person, Animal
// In react, the tags starting from smaller case are considered as tags -. eg: div, p, br, hr, table, etc 
class App extends Component {

    // only works when we have extended React.Component
    // props is data sent from another component
    // state is data maintained internally by the component
    // state is a reserved word
    state = {
        persons: [
            { name: 'Mihir', age: 25 },
            { name: "Mansi", age: 19 },
            { name: "Bhavesh", age: 53 }
        ]
    };

    // typically an event handler function is named as {functionName}Handler,
    // For eg:
    switchNameHandler = () => {
        alert('Was clicked!')
    }

    render() {
        // className is restriction of JSX as class is a reserved keyword in JS
        return (
            // This is similar to HTML but it is actually JSX
            // Dont add () after the end of the function name, otherwise function will be called as soon as page is rendered
            // just call the method by this.switchNameHandler
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies : Watching Movies!</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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
