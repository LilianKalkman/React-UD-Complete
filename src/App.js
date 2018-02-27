import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Lilian',
  }

  changeUsernameHandler = () => {
    this.setState({
      username: 'Sander'
    })
  }

  changeInputHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <UserInput changeName={this.changeUsernameHandler} changeInput={this.changeInputHandler}/>
        <UserOutput name={this.state.username}/>
        <UserOutput name='kyra'changeName={this.changeUsernameHandler}/>
        <UserOutput name={this.state.username}/>
      </div>
    );
  }
}

export default App;
