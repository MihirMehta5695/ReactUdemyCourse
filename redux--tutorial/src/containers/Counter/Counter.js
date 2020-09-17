import React, { Component } from 'react';
import { increment } from '../actions/actions'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
// connect is a function that returns a HoC
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// Map of props-names and slices of state stored in Redux
// The state represents the state in Redux
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results,
    };
}

// This method will map the Dispatchers of Redux with props recieved by this container/components
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: (val) => dispatch({ type: actionTypes.ADD, value: val }),
        onSubtractCounter: (val) => dispatch({ type: actionTypes.SUBTRACT, value: val }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElementId: id }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);