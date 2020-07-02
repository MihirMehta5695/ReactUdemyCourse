import React, { Component } from 'react';
import Person from './Person/Person'

export default class Persons extends Component {

    // Only works if there is state initialized
    /*static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps')
        return state;
    } */

    // Legacy method
    /*
    componentWillReceiveProps(props) {
        console.log('[Persons.js] componentWillReceiveProps', props)
    }*/

    // Legacy method
    /*
        componentWillUpdate() {

        }
    */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { message: 'Snapshot!' };
    }

    // Most used hook! as we need to fetch data from server.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

    render() {
        console.log("[Persons.js] rendering....");
        return (
            this.props.persons.map(
                (person, index) => {
                    return (
                        <Person
                            key={person.id}
                            myClick={() => this.props.myClick(index)}
                            name={person.name}
                            age={person.age}
                            myChange={(event) => this.props.myChange(event, person.id)}
                        />
                    )
                })
        )
    }
};