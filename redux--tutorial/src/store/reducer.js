const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            const newState = Object.assign({}, state);
            // The above line is same as {...state}
            newState.counter = state.counter + 1
            return newState;
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            }

        case "ADD":
            return {
                ...state,
                counter: state.counter + action.value
            }

        case "SUBTRACT":
            return {
                ...state,
                counter: state.counter - action.value
            };

        case "STORE_RESULT":
            // Array.concat add element in immuttably
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }

        case "DELETE_RESULT":
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)

            const updatedArray = state.results.filter(result => result.id !== action.resultElementId)
            return {
                ...state,
                results: updatedArray
            }
    }

    return state;

}

export default reducer;