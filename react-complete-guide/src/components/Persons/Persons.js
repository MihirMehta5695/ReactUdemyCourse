import React, { PureComponent } from 'react';
import Person from './Person/Person'

// PureComponents are used when we need to check all elemnts of props in shouldComponentUpdate. 
// We can skip the implementation of shouldComponentUpdate with the use of PureComponent
/*
For EG:
   shouldComponentUpdate(nextProps, nextState) {
        if (
            nextProps.persons !== this.props.persons ||
            nextProps.showPersons !== this.props.showPersons ||
            nextProps.changed !== this.props.changed
            ) {
            return true;
        } else {
            return false;
        }
        // return false; //prevents update
    } 
*/
export default class Persons extends PureComponent {

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
    //    If parent is going to update and pass new props, makes no sense of implementing shouldComponentUpdate()
    /*     shouldComponentUpdate(nextProps, nextState) {
            console.log('[Persons.js] shouldComponentUpdate');
            if (nextProps.persons !== this.props.persons) {
                return true;
            } else {
                return false;
            }
            // return false; //prevents update
        } */


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { message: 'Snapshot!' };
    }

    // Most used hook! as we need to fetch data from server.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

    // To perform cleanup before the component gets unmounted from react
    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount')
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