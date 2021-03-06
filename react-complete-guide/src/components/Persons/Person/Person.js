import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classes from './Person.css';
import Aux from '../../../containers/hoc/Auxiliary/Auxiliary';
import withJSClass from '../../../containers/hoc/With/withJSClass';
import AuthContext from '../../../context/auth-context'
class Person extends Component {

    constructor(props) {
        super(props)
        // This work only in react v16+
        this.elementRef = React.createRef();
    }

    // Only in class-based components
    static contextType = AuthContext;

    componentDidMount() {
        // This focuses on the first input element it finds globally
        // document.querySelector('input').focus();

        this.inputElement.focus(); //This works in all versions of react
        this.elementRef.current.style.color = 'red';  // This work only in react v16+

        console.log(this.context.authenticated);
    }

    render() {
        // React has its own Auxillary COmponent called as the Fragment component
        // The isAuth prop is passed on from App.js to this component.
        // This was achieved via prop-chaining
        return (
            <Aux>
                {/*                 <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please Login in</p>}
                </AuthContext.Consumer> */}
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please Login in</p>}

                <p
                    ref={this.elementRef}
                    onClick={this.props.myClick} >
                    I'm a {this.props.name} and I am {this.props.age} years old!
                </p>
                <p> {this.props.children}</p>
                {/*the ref works in all versions of react*/}
                <input
                    type="text"
                    ref={(inputEl) => { this.inputElement = inputEl }}
                    onChange={this.props.myChange}
                    value={this.props.name} />
            </Aux>
        )
    }
}

// propTypes is reserved by react
// This restricts the types of data that are accepted in props of this component.
// Works with functional and class-based components
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withJSClass(Person, classes.Person);