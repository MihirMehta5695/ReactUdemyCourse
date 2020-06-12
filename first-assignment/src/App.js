import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

    state = {
        userName: "sampleUserName"
    };

    inputChangeHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <div className="ioContainer">
                    <UserInput myInputChange={this.inputChangeHandler} userName={this.state.userName}></UserInput>
                    <UserOutput userName={this.state.userName}></UserOutput>
                </div>
                <div className="ioContainer">
                    <UserInput myInputChange={this.inputChangeHandler} userName={this.state.userName}></UserInput>
                    <UserOutput userName={this.state.userName}></UserOutput>
                </div>
                <div className="ioContainer">
                    <UserInput myInputChange={this.inputChangeHandler} userName={this.state.userName}></UserInput>
                    <UserOutput userName={this.state.userName}></UserOutput>
                </div>
            </div>
        );
    }
}

export default App;
