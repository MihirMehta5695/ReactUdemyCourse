// React convention to name component Folder with capital letter
// Also, it is also convention to name all the files in same context
// react is all about compos

import React from 'react';

// This is possible
function PersonOld() {
    return <h2>Hello World!</h2>
}

// This is also possible (ES5 syntax)
var personES5 = function () {
    return <h2>Hello World!<br />This is a person component!</h2>
};

// The convention and
//the standard using ES6 is 
const person = () => {
    return <p>I'm a Person!</p>
}

export default person;