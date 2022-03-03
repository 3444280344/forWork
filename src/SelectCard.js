import React, { Component } from 'react'
import "./selectCard.less"
import axios from "axios"

export default class SelectCard extends Component {
    constructor() {
        super()
        this.state = {
            titleList: [1, 2, 3],
            containerList: ["aaa","bbb","ccc"],
            id:0
        }
    }
    
    handleChoosed(id){
        this.setState({
            id:id
        })
        console.log(id);
        axios({
            url:"https://m.maizuo.com/gateway?cityId=210300&pageNum=1&pageSize=10&type=1&k=3816111",
            method:"get",
            headers:{
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"16455956013806706823856129","bc":"210300"}',
                "X-Host": "mall.film-ticket.film.list"
            }
        }
        )
        .then(res=>console.log(res))

    }
    render() {
        var titleList = this.state.titleList.map((item, index) => {
            return (<div className={index==this.state.id?'hover':""} key={index}
            onMouseOver={this.handleChoosed.bind(this,index)}>
                {item}
            </div>)
        })
        var containerList = this.state.containerList.map((item, index) => {
            return (<li className={index==this.state.id?'choosed':""} key={index}
            >
                {item}
            </li>)
        })
        return (
            <div className='box'>
                <div>
                    {titleList}</div>
                <div>

                </div>
                {containerList}
            </div>
        )
    }
}
