import React, { Component } from 'react';

export default class UserOutput extends Component {
    render(props) {
        return (
            <div>
                <p>{this.props.userName}</p>
            </div>
        )
    }
}