import React from 'react';
import Person from './Person/Person'

const Persons = (props) => {
    console.log("[Persons.js] rendering....");
    return (
        props.persons.map(
            (person, index) => {
                return (
                    <Person
                        key={person.id}
                        myClick={() => props.myClick(index)}
                        name={person.name}
                        age={person.age}
                        myChange={(event) => props.myChange(event, person.id)}
                    />
                )
            })
    )
};

export default Persons;