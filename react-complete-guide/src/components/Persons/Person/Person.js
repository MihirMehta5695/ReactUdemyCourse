import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classes from './Person.css';
import Aux from '../../../containers/hoc/Auxiliary/Auxiliary';
import withJSClass from '../../../containers/hoc/With/withJSClass';
class Person extends Component {

    render() {
        // React has its own Auxillary COmponent called as the Fragment component
        return (
            <Aux>
                <p
                    onClick={this.props.myClick} >
                    I'm a {this.props.name} and I am {this.props.age} years old!
                </p>
                <p> {this.props.children}</p>
                <input
                    type="text"
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