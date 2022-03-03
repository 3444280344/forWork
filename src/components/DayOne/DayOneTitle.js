import React, { Component } from 'react'
import '../../cssStyle/DayOne/title.css'


export default class DayOneTitle extends Component {
    constructor() {
        super()
        this.state = {
            username: "张三"
        }

    }

    getTime(){
        var hours=new Date().getHours()
        if(6<hours&&hours<11){
            return '早里'
        }else if(hours<15){
            return '中里'
        }else if(hours<19){
            return '下里'
        }
        else return '夜里'
    }
    render() {
        return (
            <div className='title'>
                <div>
                    <div>
                        <img src='https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF'></img>
                        <span>{this.state.username}</span>
                        <span style={{"fontSize":"20px"}}>&gt; </span>
                    </div>
                    <span>切换身份</span>
                </div>
                <div>HI,&nbsp;&nbsp;{this.getTime()}好!</div>
                <div>祝你今天元气满满，干劲十足。</div>

            </div>
        )
    }
}
