import React, { Component } from 'react'
import ChildF from './ChildF'
import ChildS from './ChildS'

export default class father extends Component {
  render() {
    return (
      <div>
        <ChildF event={()=>{
          console.log("父组件事件触发")
        }}></ChildF>
        <ChildS></ChildS>
      </div>
    )
  }
}
