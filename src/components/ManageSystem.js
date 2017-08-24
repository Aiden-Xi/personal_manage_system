import React, { Component } from 'react'
import StaffHeader from './StaffHeader'
import StaffUserList from './StaffUserList'
import StaffFooter from './StaffFooter'
import StaffDetail from './StaffDetail'
import Staff from './Staff'

class ManageSystem extends Component {
    constructor() {
        super()
        this.state = {
            staff: new Staff(),
            staffDetail: null
        }
    }

    // 增加
    addStaffItem(item) {
        this.setState({
            staff: this.state.staff.addStaffItem(item)
        })
    }
    // 删除
    removeStaffItem(key) {
        this.setState({
            staff: this.state.staff.removeStaffItem(key)
        })
    }
    // 查看详情
    detailStaffItem(key) {
        console.log(`点击 按钮 详情 = ${this.state.staff.currentStaff.filter((item) => item.key === key)[0]}`)
        this.setState({
            staffDetail: this.state.staff.currentStaff.filter((item) => item.key === key)[0]
        })
    }

    // 关闭
    closeDetail() {
        this.setState({ staffDetail: null })
    }

    // 编辑
    editDetail(item) {
        this.setState({
            stall: this.state.staff.editStaffItem(item)
        })
    }

    // 排序
    sortStaff(sortType) {
        this.setState({
            staff: this.state.staff.sortStaff(sortType)
        })
    }

    // 过滤
    filterStaff(filterType) {
        this.setState({
            staff: this.state.staff.filterStaff(filterType)
        })
    }

    // 搜索
    searchStaff(word) {
        this.setState({
            staff: this.state.staff.searchStaff(word)
        })
    }

    render() {
        return(
            <div id="manage--system">
                <StaffHeader sortStaff={this.sortStaff.bind(this)} fliterStaff={this.filterStaff.bind(this)} searchStaff={this.searchStaff.bind(this)} />
                <StaffUserList items={this.state.staff.currentStaff} onDelete={this.removeStaffItem.bind(this)} onDetail={this.detailStaffItem.bind(this)} />
                <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>
                {
                    console.log(`按钮点击之后的数据 = ${this.state.staffDetail}`)
                }
                <StaffDetail staffDetail={this.state.staffDetail} closeDetail={this.closeDetail.bind(this)} editDetail={this.editDetail.bind(this)}/>
            </div>
        )
    }
}

export default ManageSystem