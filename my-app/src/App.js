import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'

class App extends Component {

  constructor(props) {            //
    super(props);
    this.state = {
      value: "react",
    };
    this.name = "Testing.....................";    //
  }

  getVal() {                     //
  return "First Heading !!";
}
  render() {
    var val = "Second Heading !!";   //
    var val_2 = this.getVal();        //
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="square" onClick={() => this.setState({value:'X'})}>
        {this.state.value}
      </button>
      <h1>Here is my :{this.getVal()}</h1>
      <h1>Here is my :{val}</h1>
      <h1>Here is my :{val_2}</h1>
      <h1>Here is my name:{this.name}</h1>
      <Footer />
      </div>
    );
  }
}

export default App;
