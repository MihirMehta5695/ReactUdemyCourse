import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
    state = {
        persons: [
            { id: "sadvcxasd", name: 'Mihir', age: 25 },
            { id: "das2qe", name: "Mansi", age: 19 },
            { id: "q2dasd", name: "Bhavesh", age: 53 }
        ],
        otherValue: "Some other value",
        showPersons: false
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = { ...this.state.persons[personIndex] }
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        });
    }

    switchNameHandler = newName => {
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
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })
    };

    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <Persons
                    myClick={this.deletePersonHandler}
                    myChange={this.nameChangedHandler}
                    persons={this.state.persons} />
            );
        }
        return (
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    clicked={this.togglePersonsHandler}
                    persons={this.state.persons}
                />
                {persons}
            </div>
        );
    }
}
export default App;