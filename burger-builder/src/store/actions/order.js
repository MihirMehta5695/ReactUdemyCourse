import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

export const purchareBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGET_SUCCESS,
        orderId: id,
        orderData: orderData
    }
};

export const purchareBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGET_FAIL,
        error: error
    }
};

export const purchaseBurgerStart = (orderData) => {
    return dispatch => {
        axios.post('/orders.json', orderData)
            .then(response => {
                dispatch(purchareBurgerSuccess(response.data, orderData));
                console.log(response.data)
            })
            .catch(error => {
                dispatch(purchareBurgerFail(orderData))
            })
    }
}