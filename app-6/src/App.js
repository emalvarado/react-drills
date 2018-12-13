import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

// class App extends Component {
//   state={
//     list:[],
//     userInput:''
//   }

// handleChange(prop,val){
//   this.setState({
//     [prop]:val
//   })
// }

// addToList(){
//   let newArray = this.state.list.slice()
//   newArray.push(this.state.userInput)

//   this.setState({
//     list: newArray,
//     userInput:''
//   })
// }

//   render() {
//     let newList = this.state.list.map((e,i) =>(
//       <Todo key={i} task={e}/>
//     ))
//     return (
//       <div className="App">
//         <input 
//         value={this.state.userInput}
//         onChange={(e) => this.handleChange('userInput', e.target.value)} />
//         <button onClick={()=>this.addToList()}>Add</button>
//         {newList}
//       </div>
    
//     );
//   }
// }

export default App;
