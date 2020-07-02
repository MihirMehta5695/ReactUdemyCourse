import React, { useEffect } from 'react';
import classes from './Cockpit.css'

// after useState, the next import react-hook you can use is the useEffect() hook.
// useEffect combines all the life-cycle hooks in class-based components into one method called useEffect() for functional components.
const cockpit = props => {


    // useEffect is called for every render cycle
    // the second argument lets react know when to call the useEffect method
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // mocking http requests
        const timer = setTimeout(() => {
            alert('Saving data to the cloud!')
        }, 1000);
        return () => {
            // This is called by the useEffect() for cleanup, similar to componentWillUnmount
            console.log('[Cockpit.js] cleanUp work in useEffect');
            clearTimeout(timer);
        }
    }, []); // if we leave the second argument empty, it tells react to run the useEffect method only for the first time.
    // acts as 
    // You can multiple useEffect calls, as many as you want
    // this useEffect will run for every render cycle
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        return () => {
            console.log('[Cockpit.js] cleanUp work in 2nd useEffect')
        }
    });

    // let classes = ['red', 'bold'].join(' ');//returns "red bold"
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);//classes = ['red]
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes=['red','bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;