import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

// after useState, the next import react-hook you can use is the useEffect() hook.
// useEffect combines all the life-cycle hooks in class-based components into one method called useEffect() for functional components.
const cockpit = props => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated)
    // useEffect is called for every render cycle
    // the second argument lets react know when to call the useEffect method
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // mocking http requests
        // setTimeout(() => {
        //     alert('Saving data to the cloud!')
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            // This is called by the useEffect() for cleanup, similar to componentWillUnmount
            console.log('[Cockpit.js] cleanUp work in useEffect')
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

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);//classes = ['red]
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold); // classes=['red','bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
            {/* <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

// Adding memo() makes this component use the memoization technique.
// By using the memo(), this component is only re-rendered, when the props(input) to this component changes.
export default React.memo(cockpit);