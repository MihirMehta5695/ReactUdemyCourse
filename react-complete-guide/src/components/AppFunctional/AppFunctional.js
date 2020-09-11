import React, { useState } from 'react';
import './AppFunctional.css';
import Person from '../Person/Person.js'

// 

const app = props => {

    // useState() returns exactly 2 elements as follows
    // 1st is the current state
    // 2nd is the function to update this state, such that react is aware of it and re-renders the component
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Mihir', age: 25 },
            { name: "Mansi", age: 19 },
            { name: "Bhavesh", age: 53 }
        ]

    });

    // Use multiple states so that merging is not an issue
    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
        // setPersonsState works differently then class-based setState
        // The setPersonsState will replace an entire state, whereas in setState only the difference is replaced
        setPersonsState({
            persons: [
                { name: '13MB', age: 25 },
                { name: "Mansi", age: 19 },
                { name: "Bhavesh", age: 52 }
            ]
        });
    }


    return (
        <div className="App" >
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies : Watching Movies!</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    );
}

export default app;
