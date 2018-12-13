import React, { Component } from 'react';

export default class NewTask extends Component {
    state = {
        userInput: ''
    }

    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }

    handleAdd= () => {
        this.props.add(this.state.userInput)
        this.setState({
            userInput: ''
        })
    }

    render() {
        return (
            <div>
                <input 
                value={this.state.userinput}
                onChange={e => this.handleChange('userInput', e.target.value)} />
                <button onClick={()=> this.handleAdd()}>Add</button>
            </div>
        )
    }
}