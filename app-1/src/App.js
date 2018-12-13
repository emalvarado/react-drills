import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }  
  }

  handleChange(prop,val) {
    this.setState({
      [prop]: val
    })
  }

  render() {
    return (
      <div>
        <input onChange={(e)=>this.handleChange('input', e.target.value)}
        type="text"/>
       <h1> {this.state.input} </h1>
      </div>
    )
  }
}

export default App;



// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       userInput:''
//     }

//     this.handleUserInput = this.handleUserInput.bind(this);
//   }

// handleUserInput(e){
//   this.setState({
//     userInput: e.target.value,
//   })
// }

//   render() {
//     return (
//       <div className="App">
//         <input onChange={e => this.handleUserInput(e)} />
//         <span>{this.state.userInput}</span>
//       </div>
//     );
//   }
// }


// handleChange(prop, val){
//   this.setState({
//     [prop]:val
//   })
// }

// onChange = {((e)=> this.handleChange('userInput', e.target.value))}
// //^in the input