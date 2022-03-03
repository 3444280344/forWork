import React, { Component } from 'react'
import Child from './Child'
import SelectCard from './SelectCard'


// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }

export default class App extends Component {
    constructor(){
        super()
        this.state={data:111}
    }
    render() {
        return (
            <div style={{"height":'100vh'}}>
                App组件,
                {this.props.name}
                <Child name="aaa"></Child>
                <SelectCard></SelectCard>
            </div>
        )
    }

}
