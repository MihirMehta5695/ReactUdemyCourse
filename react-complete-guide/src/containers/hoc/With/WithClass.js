// It is generally the convention to name the HOC starting with "With" keyword
import React from 'react';

const withClass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default withClass;