import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super();

    this.state = {
      list: ['butterbeer', 'pumpkin pasties', 'pumpkin juice', 'chocolate frogs', 'treakle tart']
    }
  }
  render(){
    let listToDisplay = this.state.list.map((item, i)=>(
      <h2 key={i}>{item}</h2>
    ))
    return(
      <div>
        {listToDisplay}
      </div>
    )
  }
}



export default App;















// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       array: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
//     }
//   }


// render() {
//   let list = this.state.array.map((e)=>{
//    return <li key={e}>{e}</li>
//   })
//   return (
//     <div className="App">
//       {list}
//     </div>
//   );
// }
// }