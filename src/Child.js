import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            date: new Date(),
            arrA:[111,222,333,444]
        }
        this.getRef=React.createRef()
        this.autoTime()
    }
    autoTime() {
        this.timerID = setInterval(() => {
            return this.tick()
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date(),
        })
    }

    // handleClick() {
    //     console.log( "___",this.state.date)
    // }
    handleClick=()=>{
        console.log(this.state.date)
    }
    handleClick2(e,a){
        console.log(this.state.date,e.target,a)
        console.log(this.getRef.current)
    }
    render() {
        var arrAlist=this.state.arrA.map((item,index)=><li key={index}>{item}</li> )
        return (
            <div>
                <div  onClick={this.handleClick}>
                    箭头
                </div>
                <div onClick={(e,a="aaa")=>{
                    this.handleClick2(e,a)
                    }}>
                    内部箭头
                </div>
                <div ref={this.getRef}>
                    ref获取节点
                </div>
                <div>
                    {arrAlist}
                </div>
                {this.props.name + "____"}
                {this.state.date.toLocaleDateString()+"/"}
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}
