import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
class App extends Component {

    state = {
        inputTextLength: 0,
        inputText: ''
    };

    inputChangeHandler = event => {
        const inputText = event.target.value;
        const length = inputText.length
        this.setState({
            inputTextLength: length,
            inputText: inputText
        });
    }

    charClickHandler = (event, index) => {
        const charArray = new String(this.state.inputText)
        const newString = charArray.slice(0, index) + '' + charArray.slice(index + 1, charArray.length);
        this.setState({
            inputText: newString,
            inputTextLength: newString.length
        })
    };


    render() {

        const characters = [...this.state.inputText.split("")]
        const characterComponentList = (
            <div>
                {
                    characters.map((char, index) => {
                        return (<CharComponent
                            character={char}
                            key={index}
                            myClick={(event) => { this.charClickHandler(event, index) }}
                        />)
                    })
                }
            </div>
        );

        return (
            <div className="App" >
                <input type="text" value={this.state.inputText} onChange={this.inputChangeHandler} />
                <p>Length of Input is : {this.state.inputTextLength}</p>
                <ValidationComponent textLength={this.state.inputTextLength} />
                {characterComponentList}
            </div>
        );
    }
}

export default App;
