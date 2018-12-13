import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



// this is the one im onnnnn 12/12/18


class App extends Component {
  constructor(props){
    super();

    this.state = {
      list: ['butterbeer', 'pumpkin pasties', 'pumpkin juice', 'chocolate frogs', 'treakle tart'],
      input: ''
    }
  }

handleChange(prop,val){
  this.setState({
    [prop]: val
  })
}

  render(){
   let itemsToDisplay = this.state.list.filter((item) => (item.includes(this.state.input))).map((item, i) => (
     <h2 key={i}> {item} </h2>
   ))
    return(
      <div>
        <input onChange={(e)=> this.handleChange('input', e.target.value)}
        type='text'/>
        {itemsToDisplay}
      </div>
    )
  }
}



export default App;























// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       array: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
//       userInput: ''
//     }
//   }

// handleUpdateInput(e){
//   this.setState({
//     userInput: e.target.value,
//   })
// }  

//   render() {
//     let {array} = this.state;
//   let filteredList = array.filter((e)=>{
//     return e.includes(this.state.userInput)
//   });
//     let list = filteredList.map((e)=>{
//    return <li key={e}>{e}</li>
//   })
//   return (
//     <div className="App">
//     <input onChange={this.handleUpdateInput}/>
//       {list}
//     </div>
//   );
// }
// }



// class App extends Component {
// constructor(){
//   super();

//   this.state = {
//     list: ['apples','bread','water'],
//     userInput:''
//   }
// }

// handleChange(prop,val){
//   this.setState({
//     [prop]:val
//   })
// }

// render() {
//   let filtered = this.state.list.filter((e,i)=>(
//     e.includes(this.state.userInput)
//   )).map((e,i)=> (
//     <div key={i}>
//       {e}
//     </div>
//   ))
//   return (
//     <div className="App">
//     <input onChange={(e)=>this.handleChange('userInput', e.target.value)}/>
//     <h2>{filtered}</h2>
//     </div>
//   );
// }
// }