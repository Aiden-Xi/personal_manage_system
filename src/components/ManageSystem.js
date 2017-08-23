import React, { Component } from 'react'
import StaffHeader from './StaffHeader'
import StaffUserList from './StaffUserList'
import StaffFooter from './StaffFooter'
import Staff from './Staff'

class ManageSystem extends Component {
    constructor() {
        super()
        this.state = {
            users: new Staff
        }
    }

    handleOnDelete(index) {

    }

    render() {
        let users = [
            { description:'我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任'},
            { description:'我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '学生'},
            { description:'我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '学生'},
            { description:'我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '实习'},
            { description:'我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '实习'},
            { description:'我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '学生'},
            { description:'我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '主任'},
            { description:'我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师'},
            { description:'我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生'},
            { description:'我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习'},
            { description:'我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习'}
        ]
        return(
            <div id="manage--system">
                <StaffHeader />
                <StaffUserList users={users} onDelete={this.handleOnDelete.bind(this)} onDetail={this.handleOnDetail.bind(this)} />
                <StaffFooter />
            </div>
        )
    }
}

export default ManageSystem