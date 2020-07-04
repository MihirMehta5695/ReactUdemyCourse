import React from 'react';

// firstArgument is the component, which can be anything but should start with a capital letter
// the second argument is actually what this component is for, in our case, we are using this component for styling, so className is used
// There can be any number of arguments you want after these two arguments
const withJSClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent />
        </div>
    )
}

export default withJSClass;