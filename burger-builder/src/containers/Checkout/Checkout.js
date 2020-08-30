import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

export default class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            meat: 1,
            bacon: 1
        }

    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {};
        for (let param of query.entries()) {
            // values that we get are in the format: ['salad','1']
            ingredients[param[0]] = +param[1]
        }
        this.setState({ ingredients: ingredients })

    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {

        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutContinued={this.checkoutContinuedHandler}
                    checkoutCancelled={this.checkoutCancelledHandler} />
                <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
            </div>
        )

    }

}