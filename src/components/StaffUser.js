import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StaffUser extends Component {
    static propTypes = {
        user: PropTypes.object,
        onDelete: PropTypes.func,
        onDetail: PropTypes.func,
        index: PropTypes.any
    }

    handleOnDelete() {
        if (this.props.onDelete) {
            this.props.onDelete(this.props.index)
        }
    }

    handleOnDetail() {
        if (this.props.onDetail) {
            this.props.onDetail(this.props.user)
        }
    }

    render() {
        return(
            <tr className="user--tr">
                <td className="list--id">{this.props.user.name}</td>
                <td className="list--id">{this.props.user.age}</td>
                <td className="list--id">{this.props.user.id}</td>
                <td className="list--id">{this.props.user.sex}</td>
                <td className="list--id">
                    <button className="list--btn" onClick={this.handleOnDelete.bind(this)}>删除</button>
                    <button className="list--btn" onClick={this.handleOnDetail.bind(this)}>详情</button>
                </td>
            </tr>
        )
    }
}

export default StaffUser