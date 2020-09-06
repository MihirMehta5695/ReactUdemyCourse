import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';


export default class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: 'text',
                    placeholder: "Your Name"
                },
                value: ''
            },
            street: {
                elementType: "input",
                elementConfig: {
                    type: 'text',
                    placeholder: "Street"
                },
                value: ''
            },
            zipCode: {
                elementType: "input",
                elementConfig: {
                    type: 'text',
                    placeholder: "ZIP Code"
                },
                value: ''
            },
            country: {
                elementType: "input",
                elementConfig: {
                    type: 'text',
                    placeholder: "Country"
                },
                value: ''
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: 'email',
                    placeholder: "Your E-Mail"
                },
                value: ''
            },
        },
        deliveryMethod: {
            elementType: "input",
            elementConfig: {
                options: [
                    {
                        value: 'fastest',
                        displayValue: "Fastest"
                    },
                    {
                        value: 'cheapest',
                        displayValue: "Cheapest"
                    }
                ]
            },
            value: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        // For Firebase to function correctly, remember to use '.json' after the endpoint, z.B.
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
        };
        // axios.post('/orders', order) -> for simulating the error
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/');
            })
            .catch(error => this.setState({ loading: false }))
    }

    render() {
        let form = (
            <form>
                <Input elementType="..." elementConfig="..." value='' />
                <Input inputtype="input" type="email" placeholder="Your Email" name="email" />
                <Input inputtype="input" type="text" placeholder="Street" name="street" />
                <Input inputtype="input" type="text" placeholder="Postal Code" name="postalCode" />
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}