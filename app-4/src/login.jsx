import React, {Component} from 'react';


class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange(prop, val){
    this.setState({
      [prop]:val
    })
  }

  handleClick(){
    alert(`username: ${this.state.username} password: ${this.state.password}`)
  }

  render(){
    return(
      <div>
        <input onChange={(e) => this.handleChange('username', e.target.value)}
        placeholder='username'
        type="text"/>
        <input onChange={(e) => this.handleChange('password', e.target.value)}
        placeholder='password'
        type="password"/>
        <button onClick={() => this.handleClick()}
        >Login</button>
      </div>
    )
  }
}




export default Login