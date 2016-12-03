// 1.引包
import React from 'react'
import classnames from 'classnames'

// 2.创建组件
class TodoItem extends React.Component{
    constructor(){
        super();
        this.state={
            isShowing:false
        }
    }
    render(){
        return (
            <li className={classnames({'editing':this.state.isShowing})}>
                <div className="view">
                 <input className="toggle" type="checkbox" />
                    {
                        // 双击时，显示文本框,
                        // 在文本框中编辑对应的值
                        // 在文本框中onChange事件中，调用父组件的方法,
                        // 来修改数据
                    }
                    <label
                    onDoubleClick={()=>{
                        this.setState({
                            isShowing:true
                        })
                    }}
                    >{this.props.myitem.name}</label>
                     <button className="destroy"></button>
                        </div>
                <input 
                onChange={(event)=>{
                    this.props.mychangeTodoItem({
                        id:this.props.myitem.id,
                        name:event.target.value
                    })

                }}
                className="edit" value={this.props.myitem.name} />
             </li>
            )
    }
    // 改变当前元素的name值
    changeTodoItem(event){
        this.props.myitem.name = event.target.value;
        this.setState({})
    }
}

// 3.暴露出去
// module.exports
export default TodoItem