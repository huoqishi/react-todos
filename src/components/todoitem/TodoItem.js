// 1.引包
import React from 'react'

// 2.创建组件
class TodoItem extends React.Component{
    render(){
        return (
            <li>
                <div className="view">
                 <input className="toggle" type="checkbox" />
                            <label>{this.props.myitem.name}</label>
                            <button className="destroy"></button>
                        </div>
                        <input className="edit" value="Rule the web" />
             </li>
            )
    }
}

// 3.暴露出去
// module.exports
export default TodoItem