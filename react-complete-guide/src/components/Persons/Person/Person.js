import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../containers/hoc/Auxiliary/Auxiliary';
class Person extends Component {

    render() {
        // This way works as this is the traditional way of rendering elements, where we have a root element.
        /*return (
            <div className={classes.Person} >
                <p
                    onClick={this.props.myClick} >
                    I'm a {this.props.name} and I am {this.props.age} years old!
                </p>
                <p> {this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.myChange}
                    value={this.props.name} />
            </div>
        )*/
        // It is true that adjacent jsx elements cannot be rendered and all of them must ve enclosed in a root element.
        //But the other way to render adjacent elements
        // Returning the array of elements can make rendering adjacent jsx elements possible.
        // remember to assign unique key to each of the member of the array.
        /*return [
            <p
                key="i1"
                onClick={this.props.myClick} >
                I'm a {this.props.name} and I am {this.props.age} years old!
            </p>,
            <p key="i2"> {this.props.children}</p>,
            <input
                key="i3"
                type="text"
                onChange={this.props.myChange}
                value={this.props.name} />
        ];*/

        // In order to escape the array part and div part, we can create our own Auxillary components.
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

export default Person;