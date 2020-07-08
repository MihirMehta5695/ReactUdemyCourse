import React, { Component } from "react";
import Aux from "../../hoc/Auxilliary";
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component {

    render() {
        return (
            <Aux>
                <div>Burger</div>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;