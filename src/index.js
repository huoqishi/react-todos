// 1.引包

//  1.1reacr的包
import React from 'react'
import ReactDom from 'react-dom'

//  1.2引入我们自己写的组件
import Top from './components/top/Top.js'

// 2.创建组件
class Box extends React.Component{
    render(){
        // this.props.children // 可得双标签中间的内容
        return(
            <div>
                <Top />
            </div>
            )
    }
}

// 3.渲染组件
ReactDom.render(
    <Box>我顶戴革</Box>,
    document.getElementById('box')
    )