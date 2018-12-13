import React, { Component } from 'react';
import Todo from './Todo'

export default function List (props){
    let list = props.tasks.map((e,i)=> (
       <Todo list={e} /> 
    ))
    return(
        <div>
            {list}
        </div>
    )
}