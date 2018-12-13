import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './components/NewTask'
import List from './components/List'

// class App extends Component {
//   state = {
//     list:[]
//   }

// addNewTask= (task) => {
//   let newArray = this.state.list.slice()
//   newArray.push(task)

//   this.setState({
//     list: newArray
//   })
// }

//   render() {
//     return (
//       <div className="App">
//        <NewTask add={this.addNewTask}/>
//        <List tasks={this.state.list}/>
//       </div>
//     );
//   }
// }

export default App;
