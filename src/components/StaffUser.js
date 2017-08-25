import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StaffUser extends Component {
    static propTypes = {
        user: PropTypes.object,
        onDelete: PropTypes.func,
        onDetail: PropTypes.func,
    }

    handleOnDelete() {
        if (this.props.onDelete) {
            this.props.onDelete(this.props.user.key)
        }
    }

    handleOnDetail() {
        if (this.props.onDetail) {
            this.props.onDetail(this.props.user.key)
        }
    }

    render() {
        return(
            <tr className="user--tr">
                <td className="list--id">{this.props.user.info.name}</td>
                <td className="list--id">{this.props.user.info.age}</td>
                <td className="list--id">{this.props.user.info.identity}</td>
                <td className="list--id">{this.props.user.info.sex}</td>
                <td className="list--id">
                    <button className="list--btn" onClick={this.handleOnDelete.bind(this)}>删除</button>
                    <button className="list--btn" onClick={this.handleOnDetail.bind(this)}>详情</button>
                </td>
            </tr>
        )
    }
}

export default StaffUser