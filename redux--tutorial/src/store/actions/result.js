import * as actionTypes from './actionTypes'

export const saveResult = (result) => {
    // one way to transform data before storing is to transform it in the action file itself
    // const updatedResult = result*2;//Like this 
    return {
        type: actionTypes.STORE_RESULT,
        result: result/*updatedResult*/
    }
    // Other way to transform data before storing is to transform it in the reducer
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
    type: actionTypes.DELETE_RESULT,
    resultElementId: id
})