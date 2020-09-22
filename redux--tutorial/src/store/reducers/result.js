import * as actionTypes from '../actions/actionTypes'

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.STORE_RESULT:
            // Array.concat add element in immuttably
            return {
                ...state,
                // If we wanted to transform result before storage, we can simply transform it like the below comment:
                // results: state.results.concat({ id: new Date(), value: action.result *2 })
                results: state.results.concat({ id: new Date(), value: action.result })
            }

        case actionTypes.DELETE_RESULT:
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