import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
    // 注意：状态在哪里 操作状态的方法就在哪里

    // 初始化状态
    state = {
        todolist:[
            {id:'001', name:'干饭', done:true},
            {id:'002', name:'睡觉', done:true},
            {id:'003', name:'编码', done:true},
            {id:'004', name:'逛街', done:true},
        ]
    }

    // 用于添加一个todo项 接收的参数是todo对象
    addTodo = (todoObj)=>{
        // 获取原todos
        const {todolist} = this.state;//解构赋值 获取todos
        // 追加一个todo
        const newTodolist = [todoObj,...todolist];//利用展开运算符扩展数组
        // 更新状态
        this.setState({
            todolist:newTodolist
        })
    } 

    // 用于更新一个todo对象
    updateTodo = (id,done)=>{
        // 获取状态中的todolist
        const {todolist} = this.state
        // 加工 匹配数据
        const newTodolist = todolist.map((todoObj) => {
            if(todoObj.id === id) return {...todoObj,done} 
            // 改变todoObj中done属性
            else return todoObj
        })
        this.setState({
            todolist:newTodolist
        })
    }
    //deleteTodo用于删除一个todo对象
	deleteTodo = (id)=>{
		//获取原来的todos
		const {todolist} = this.state
		//删除指定id的todo对象
		const newTodolist = todolist.filter((todoObj)=>{
			return todoObj.id !== id
		})
		//更新状态
		this.setState({todolist:newTodolist})
	}

    //checkAllTodo用于全选
	checkAllTodo = (done)=>{
		//获取原来的todolist
		const {todolist} = this.state
		//加工数据
		const newTodolist = todolist.map((todoObj)=>{
			return {...todoObj,done}
		})
		//更新状态
		this.setState({todolist:newTodolist})
	}

	//clearAllDone用于清除所有已完成的
	clearAllDone = ()=>{
		//获取原来的todos
		const {todolist} = this.state
		//过滤数据
		const newTodolist = todolist.filter((todoObj)=>{
			return !todoObj.done
		})
		//更新状态
		this.setState({todolist:newTodolist})
	}

    render() {
        const {todolist} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    {/* 头部组件 */}
                    <Header addTodo = {this.addTodo}/>
                    {/* List组件 */}
                    <List todos={todolist} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/> 
                    {/* Footer组件 */}
                    <Footer todos={todolist} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}
