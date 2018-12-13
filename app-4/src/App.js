import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login'


class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Login />
      </div>
    )
  }
}


export default App
  























// class App extends Component {
  //   render() {
  //     return (
  //       <div className="App">
         
  //       </div>
  //     );
  //   }
  // }
  
  // export default App;
  
  
  
  
  
  
  // class Login extends Component {
  //   state={
  //     username: '',
  //     password: ''
  //   }
  
  //   handleChange(prop,val){
  //     this.setState({
  //       [prop]:val
  //     })
  //   }
  
  // alertUser = () => {
  //   alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  // }
  
  //   render(){
  //     return(
  //       <div>
  //         <input onChange={(e) => this.handleChange('username',e.target.value)}/>
  //         <input onChange={(e) => this.handleChange('password',e.target.value)}/>
  //         <button onClick={()=>this.alertUser()}>Login</button>
  //       </div>
  //     )
  //   }
  // }