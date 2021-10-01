import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {
        mouse:false
    }

    // 鼠标移入、移出的回调
    handleMouse = (flag) =>{
        return() => {
            this.setState({
                mouse:flag
            })
        }
    }

    // 勾选 取消勾选某一个todo的回调
    handleCheck = (id) => {
        return(event) => {
            this.props.updateTodo(id,event.target.checked)
        }
    }

    // 删除一个回调
    handleDelete = (id)=>{
		if(window.confirm('确定删除吗？')){
			this.props.deleteTodo(id)
		}
	}
 
    // 鼠标没有移入 初始state 为 false
    // 写这个函数用于改变mouse 监听鼠标动作 鼠标移入 用 this.setState({mouse:flag}) + 调用 handleMouse(true) 改为true
    // 离开后调用 handleMouse(false) 改为false
    
    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            // handleMouse写了小括号 说明是调用这个函数 handleMouse要有返回值
            <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    {/* 下面的Checked 之前为 defaultChecked 后期会有小bug 但是现在好用！以后再改进 */}
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{display:mouse ? 'inherit' : 'none'}}>删除</button>
            </li>
        )
    }
}
