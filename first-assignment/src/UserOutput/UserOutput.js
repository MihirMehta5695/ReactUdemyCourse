import React, { Component } from 'react';

export default class UserOutput extends Component {
    render(props) {
        return (
            <div>
                <p>Hello {this.props.userName}</p>
                <p>Hope you are doing well!</p>
            </div>
        )
    }
}