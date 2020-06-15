import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'
// Person can be any name, but it convention to use the same name as the component Name
// But component name should always start with capital, as it will be used as tag -> Person, Animal
// In react, the tags starting from smaller case are considered as tags -. eg: div, p, br, hr, table, etc 
class App extends Component {
    // This is a state-full component
    // or called as smart component or container component
    // It is a good practise to create as many state-less component as possible.


    // only works when we have extended React.Component
    // props is data sent from another component
    // state is data maintained internally by the component
    // state is a reserved word
    state = {
        persons: [
            { id: "sadvcxasd", name: 'Mihir', age: 25 },
            { id: "das2qe", name: "Mansi", age: 19 },
            { id: "q2dasd", name: "Bhavesh", age: 53 }
        ],
        otherValue: "Some other value",
        showPersons: false
    };

    // This will be passed down to the child element,
    // and will be called whenever there is a change in the input type text of person
    nameChangedHandler = event => {

        // event contains the target on which the event was triggered
        // and target is input type text, thus it also has the attribute value

        this.setState({
            persons: [
                { name: "Mihir", age: 25 },
                { name: event.target.value, age: 19 },
                { name: "Bhavesh", age: 53 }
            ]
        });
    }

    // Not used anymore
    // typically an event handler function is named as {functionName}Handler,
    // For eg:
    switchNameHandler = newName => {
        // this will not work -> this.state.persons[0].name="13MB";
        // The following code would only merge the persons object and wont change anything else , for eg otherValue would be unchanged
        // This is only available in class-based components
        this.setState({
            persons: [
                { name: newName, age: 25 },
                { name: "Mansi", age: 19 },
                { name: "Bhavesh", age: 52 }
            ]
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow })
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons;
        // Above line is flawed and can lead to unexpected outcomes in a huge app
        // Instead of copying reference, now the actual contents are copied into person
        // Using the slice method with no args we copy all the contents of array 
        const personsOld = this.state.persons.slice();
        // Or you can also use the spread operator ...
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })
    };

    render() {

        // Everything gets executed again whenever the render method is called for update

        const myButtonStyle = {
            backgroundColor: "white",
            font: 'inherit',
            padding: "8px",
            cursor: 'pointer',
            border: '1px solid blue',
            'boxShadow': '2px 4px 5px lightblue'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map(
                        (person, index) => {
                            return (
                                <Person
                                    myClick={() => this.deletePersonHandler(index)}
                                    name={person.name}
                                    age={person.age}
                                    key={person.id}
                                />
                            )
                        })}
                </div>
            );
        }

        // className is restriction of JSX as class is a reserved keyword in JS
        return (
            // This is similar to HTML but it is actually JSX
            // Dont add () after the end of the function name, otherwise function will be called as soon as page is rendered
            // just call the method by this.switchNameHandler
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={myButtonStyle}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}

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
