import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent';

class App extends Component {
  state = {
    userinput: '',
  }

  onInputChange = (event) => {
    const input = event.target.value;
    this.setState({ userinput: input });
  }

  removeLetter = (index) => {
    const inputarr = this.state.userinput.split('');
    inputarr.splice(index, 1);
    const userinput = inputarr.join('');
    this.setState({ userinput: userinput});
  }

  render() {
    const CharList = this.state.userinput.split('').map((letter, index) => {
      return <Char letter={letter} key={index} remove={() => this.removeLetter(index)}/>;
    });

    return (
      <div className="App">
        <input type="text" onChange={this.onInputChange} value={this.state.userinput}/>
        <p>{this.state.userinput}</p>
        <Validation length={this.state.userinput.length}/>
        {CharList}
      </div>
    );
  }
}

export default App;
