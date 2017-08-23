import React, { Component } from 'react'
import StaffHeader from './StaffHeader'
import StaffUserList from './StaffUserList'

class ManageSystem extends Component {
    render() {
        let users = [
            { descrip:'我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', identity: '主任'},
            { descrip:'我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', identity: '学生'},
            { descrip:'我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', identity: '学生'},
            { descrip:'我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', identity: '实习'},
            { descrip:'我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', identity: '实习'},
            { descrip:'我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', identity: '学生'},
            { descrip:'我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', identity: '主任'},
            { descrip:'我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', identity: '老师'},
            { descrip:'我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', identity: '学生'},
            { descrip:'我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', identity: '实习'},
            { descrip:'我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', identity: '实习'}
        ]
        return(
            <div id="manage--system">
                <StaffHeader />
                <StaffUserList users={users} onDetail={this.handle} />
            </div>
        )
    }
}

export default ManageSystem