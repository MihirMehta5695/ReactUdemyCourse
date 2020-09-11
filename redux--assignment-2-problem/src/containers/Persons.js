import React, { Component } from 'react';
import { connect } from 'react-redux'
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/action'
import addPerson from '../components/AddPerson/AddPerson';
class Persons extends Component {
    newPersonCreator = () => {
        return {
            id: Math.random(), // not really unique but good enough here!
            name: 'Mihir',
            age: Math.floor(Math.random() * 40)
        };
    }

    render() {
        return (
            <div>
                <AddPerson personAdded={() => this.props.addPerson(this.newPersonCreator())} />
                {this.props.people.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.deletePerson(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    people: state.persons
})

const mapDispatchToProps = dispatch => ({
    addPerson: (person) => dispatch({ type: actionTypes.ADD_PERSON, person: person }),
    deletePerson: (personId) => dispatch({ type: actionTypes.DELETE_PERSON, personId: personId })
})

export default connect(mapStateToProps, mapDispatchToProps)(Persons);