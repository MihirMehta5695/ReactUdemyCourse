import React from 'react';
import Modal from '../../UI/Modal/Modal';
import Aux from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button';
const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => (
        <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span> : {props.ingredients[igKey]}
        </li>
    ));

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button onClick={props.}>CANCEL</Button>
            <Button>CONTINUE</Button>
        </Aux>
    );
};

export default OrderSummary;