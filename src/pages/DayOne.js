import React, { Component } from 'react'
import DayOneTitle from '../components/DayOne/DayOneTitle'
import DayOneMain from '../components/DayOne/DayOneMain'

export default class DayOne extends Component {
    constructor(){
        super()
    }

  render() {
    return (
      <div style={{"background":"#f1f1f1","height":"100vh","boxSizing":"border-box"}}>
          <DayOneTitle></DayOneTitle>
          <DayOneMain></DayOneMain>
      </div>
    )
  }
}
