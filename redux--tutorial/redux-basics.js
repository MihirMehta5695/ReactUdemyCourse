const redux = require('redux')
// redux.createStore() is a function but we don't execute it here immediately
const createStore = redux.createStore;

// Could be anything
const intialState = {
    counter: 0
};

// Reducer
const rootReducer = (state = intialState, action) => {
    // This is a valid and simplest reducer which returns the same old state.
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState())

// Dispatching Action

// Subscription