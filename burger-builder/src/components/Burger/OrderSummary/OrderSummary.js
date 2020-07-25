import React from 'react';
import Modal from '../../UI/Modal/Modal';
import Aux from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
    // This could be a funtional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => (
            <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span> : {this.props.ingredients[igKey]}
            </li>
        ));

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;