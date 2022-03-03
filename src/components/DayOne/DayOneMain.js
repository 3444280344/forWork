import React, { Component } from 'react'
import '../../cssStyle/DayOne/main.css'

export default class DayOneMain extends Component {
    constructor() {
        super()
        this.state = {
            clickList: ["我的订单","我的活动","我的孩子","我的证书","积分商城","意见反馈","设置"]
        }
    }
  render() {
      var clickList=this.state.clickList.map((item,index)=>{
        return(<div key={index}><span>{item}</span> <span>》</span></div> )
      } )
    return (
      <div className='main'>
        {clickList}
      </div>
    )
  }
}
