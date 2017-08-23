import React, { Component } from 'react'
import PropTypes from 'prop-types'
import User from './StaffUser'

class StaffUserList extends Component {
    static propTypes = {
        users: PropTypes.array,
        onDelete: PropTypes.func,
        onDetail: PropTypes.func
    }

    static propDefaults = {
        users: []
    }

    // handleOnDelete(index) {
    //
    // }
    //
    // handleOnDetail() {
    //
    // }

    render() {
        let contents = []
        if (this.props.users.length === 0) {
            contents.push(<tr><th colSpan="5" className="tempEmpty">暂无用户</th></tr>);
        } else {
            this.props.users.map((user, i) => contents.push(<User
                user={user}
                key={i}
                index={i}
                onDelete={this.props.onDelete}
                onDetail={this.props.onDetail} />))
        }
        return(
            <table className="user--list">
                <thead>
                    <th className="list--id">姓名</th>
                    <th className="list--id">年龄</th>
                    <th className="list--id">身份</th>
                    <th className="list--id">性别</th>
                    <th className="list--id">操作</th>
                </thead>
                <tbody>
                    {contents}
                </tbody>
            </table>
        )
    }
}

export default StaffUserList