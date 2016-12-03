// 1.引包
import React from 'react';

// 2.创建组件
class Footer extends React.Component{
    render(){
        return (
            <footer className="footer">
                <span className="todo-count"><strong>0</strong> item left</span>
                <ul className="filters">
                    <li>
                        <a className="selected" href="#/">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>
            )
    }
}

// 3.暴露出去
export default Footer