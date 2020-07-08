import React, { Component } from "react";
import Aux from "../../hoc/Auxilliary";
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component {
    // traditional method
    // constructor(props){
    //     super(props);
    //     this.state={...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    };

    render() {
        return (
            <Aux>
                <div>Burger</div>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;