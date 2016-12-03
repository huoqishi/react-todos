// 1.引包
import React from 'react';
import TopLess from './Top.less';

// TodoItem
import TodoItem from '../todoitem/TodoItem.js';
import Footer from '../footer/Footer.js'

// 2.创建组件
class Top extends React.Component{
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
                    <TodoItem />
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