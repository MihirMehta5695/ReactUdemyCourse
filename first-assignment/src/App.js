import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

    state = {
        userName: "sample"
    };

    inputChangeHandler = (event) => {
        this.setState({
            userName: event.target.value
        });
        event.target.style.width = ((event.target.value.length + 1) * 8) + 'px';
    }



    render() {

        const styles = {
            border: "1px solid green",
            width: "50%",
            margin: '5% 25%',
            padding: "10% 0px",
            boxShadow: "#ccc 4px 4px 4px"
        };
        return (
            <div className="App">
                <div style={styles}>

                    <div className="inputContainer below-spacing">
                        <UserInput myInputChange={this.inputChangeHandler} userName={this.state.userName}></UserInput>
                    </div>
                    <div className="outputContainer below-spacing">

                        <UserOutput userName={this.state.userName}></UserOutput>
                    </div>
                    <div className="outputContainer below-spacing">
                        <UserOutput userName={this.state.userName}></UserOutput>
                    </div>
                    <div className="outputContainer">
                        <UserOutput userName={this.state.userName}></UserOutput>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
