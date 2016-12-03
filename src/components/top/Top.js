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
            ],
            newtodos:''// 这是新添加的任务名
        }
    }   
    render(){
        return(
            <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <form  onSubmit={this.addhandler.bind(this)}>
                    <input 
                    onChange={this.newtodoChange.bind(this)}
                    value={this.state.newtodos} className="new-todo" placeholder="What needs to be done?" />
                </form>
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

    // 这个方法里，我们只是获取文本的值，然后赋给this.state.newtodos
    newtodoChange(event){
        this.setState({
            newtodos:event.target.value
        })
    }

    //添加任务,当我按下回车键时触发 
    addhandler(event){
        // 0. 禁止默认的提交事件
        event.preventDefault()
        // 如果是空字符串，就直接return,不执行后面代码
        if(!this.state.newtodos.trim()){
            return
        }
        
        // 1.得到用户输入的内容
        //this.state.newtodos
        // 2.把内容添加到this.state.data中。
        this.state.data.push({
            id:Math.random(),
            name:this.state.newtodos,
            completed:false
             })

        // 清空新任务
        this.state.newtodos='';

        // 为了方便操作我们先直接修改this.state.data的值,
        // 然后我们再调用 this.setState({})来更新界面
        this.setState({});

    }
}

// 3.暴露
// module.exports Top
// es6
export default Top