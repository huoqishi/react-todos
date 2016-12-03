// 1.引包
import React from 'react';
import TopLess from './Top.less';

// TodoItem
import TodoItem from '../todoitem/TodoItem.js';
import Footer from '../footer/Footer.js'

// 2.创建组件
class Top extends React.Component{
    constructor(){
        super();
        // 给一些初始化的数据来显示
        this.state={
            data:[
            {id:1, name:'小胆',completed:true },
            {id:2, name:'小月',completed:true },
            {id:3, name:'小旦',completed:true },
            {id:4, name:'小一',completed:true }
            ]
        }
    }   
    render(){
        return(
            <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" placeholder="What needs to be done?" />
            </header>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {
                        this.state.data.map( item => {
                            return (<TodoItem  key={item.id} myitem={item} />)
                        })
                    }
                </ul>
            </section>
            <Footer />
        </section>
            )
    }
}

// 3.暴露
// module.exports Top
// es6
export default Top