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
    // return state;
    if (action.type === "INC_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState())

// Subscription
store.subscribe(() => {
    console.log('[Subscription]',store.getState())
});

// Dispatching Action
// TO dispatch an action we will use our store
// The dispatch() take a javascript object as an argument
// This argument is called an action.
// The object must have a key called "type" and it can store any value of your choice.
store.dispatch({ type: "INC_COUNTER" });
// INC_COUNTER add 1 to the counter, so no payload is required
// ADD_COUNTER lets you add any number to the current state of counter, so here a payload is required to pass on the number by which the counter should be incremented.
// store.dispatch({ type: "ADD_COUNTER", payload: {value:10} });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState())

