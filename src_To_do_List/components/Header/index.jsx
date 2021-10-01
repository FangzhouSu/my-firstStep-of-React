import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

    // 对接收的props进行： 类型、必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
	//键盘事件的回调
    handleKeyUp = (event) => {
        // 解构赋值获取keyCode target
        const {keyCode, target} = event;
        // 判断是否是回车按键 敲回车才会调用addTodo 回车的keyCode是13
        if(keyCode !== 13) return;
        if(target.value.trim() === ''){
            alert("输入不能为空！");
            return;
        }
        // 准备一个todo对象
        const todoObj = {id:nanoid(),name:target.value,done:false}
        console.log(target.value)
        // 使用App（父组件）中的回调函数 addTodo 来把子组件Header中的数据传给父组件App——达到组件间通信
        this.props.addTodo (todoObj);
    }

    render() {
        return (
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
        )
    }
}
