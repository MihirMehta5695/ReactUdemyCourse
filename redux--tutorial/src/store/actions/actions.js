export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});

export const add = val => ({
    type: ADD,
    value: val
})

export const subtract = val => ({
    type: SUBTRACT,
    value: val
})

export const saveResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    }
}

export const storeResult = result => {
    // Because of middleware -> redux-thunk
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(result))
        }, 2000);
    }
}

export const deleteResult = id => ({
    type: DELETE_RESULT,
    resultElementId: id
})