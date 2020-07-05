import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from './hoc/Auxiliary/Auxiliary';
import withJSClass from './hoc/With/withJSClass';
class App extends Component {

    // Constructor is called first when this component is called
    constructor(props) {
        super(props)
        console.log('[App.js] constructor')

        // Never user this.setState(), as there will be no previos state to merge into
        // We can initialize the state here
        this.state = {
            persons: [
                { id: "sadvcxasd", name: 'Mihir', age: 25 },
                { id: "das2qe", name: "Mansi", age: 19 },
                { id: "q2dasd", name: "Bhavesh", age: 53 }
            ],
            otherValue: "Some other value",
            showPersons: false,
            showCockpit: true,
            changeCounter: 0,
            authenticated: false
        };
    }

    // This is similar to intializing in the constructor
    /*state = {
        persons: [
            { id: "sadvcxasd", name: 'Mihir', age: 25 },
            { id: "das2qe", name: "Mansi", age: 19 },
            { id: "q2dasd", name: "Bhavesh", age: 53 }
        ],
        otherValue: "Some other value",
        showPersons: false
    };*/

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // This may be deleted in the future releases
    /*componentWillMount() {
        console.log('[App.js] componentWillMount')
    }*/

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = { ...this.state.persons[personIndex] }
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        // Here, what can go wrong is that react does not guarantee that this.state.changeCounter will be the previous state.
        // So while running this code, it is not guaranteed that values of changeCounter (which depends on previous state) will be updated correctly.
        /* this.setState({
            persons: persons,
            changeCounter: this.state.changeCounter + 1
        }); */

        // A better way to solve that issue is to use another syntax of setState as follows:
        this.setState((prevState, props) => ({
            persons: persons,
            changeCounter: prevState.changeCounter + 1
        }));
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

    loginHandler = () => {
        this.setState({ authenticated: true })
    }

    render() {
        console.log("[App.js] render");
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <Persons
                    myClick={this.deletePersonHandler}
                    myChange={this.nameChangedHandler}
                    persons={this.state.persons}
                    isAuthenticated={this.state.authenticated}
                />
            );
        }
        return (
            <Aux>
                <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
                {this.state.showCockpit ?
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        clicked={this.togglePersonsHandler}
                        personsLength={this.state.persons.length}
                        login={this.loginHandler}
                    /> : null}
                {persons}
            </Aux>
        );
    }
}
export default withJSClass(App, classes.App);