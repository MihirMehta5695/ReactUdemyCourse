import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
export default class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" placeholder="Your Name" name="name" />
                    <input className={classes.Input} type="email" placeholder="Your Email" name="email" />
                    <input className={classes.Input} type="text" placeholder="Street" name="street" />
                    <input className={classes.Input} type="text" placeholder="Postal Code" name="postalCode" />
                    <Button btnType='Success'>ORDER</Button>
                </form>
            </div>
        );
    }
}