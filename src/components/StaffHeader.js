import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class StaffHeader extends Component {
    static propTypes = {
        sortStaff: PropTypes.func,
        filterStaff: PropTypes.func,
        searchStaff: PropTypes.func
    }

    // 搜索
    handleSearch(event) {
        let bar = ReactDOM.findDOMNode(this.refs.searchBar)
        let searchValue = bar.value
        this.props.searchStaff(searchValue)
    }

    // 排序
    handleSort(event) {
        let sel = ReactDOM.findDOMNode(this.refs.selOrder)
        let selValue = sel.options[sel.selectedIndex].value
        this.props.sortStaff(selValue)
    }

    // 过滤
    handleFilter(event) {
        let sel = ReactDOM.findDOMNode(this.refs.selIdentity)
        let selValue = sel.options[sel.selectedIndex].value
        console.log(`过滤的条件就是ssss ==== ${selValue}`)
        this.props.filterStaff(selValue)
    }

    render() {
        return(
            <div className="staff--header">
                <h3 className="header--title">人员管理系统</h3>
                <table className="header--table">
                    <tbody>
                        <tr>
                            <td className="header--search">
                                <input onChange={this.handleSearch.bind(this)} type="text" className="search--input" ref='searchBar' placeholder="search..."/>
                            </td>
                            <td className="header--id">
                                <label htmlFor="idSelect">人员筛选</label>
                                <select ref="selIdentity" id="idSelect" onChange={this.handleFilter.bind(this)}>
                                    <option value="0">全部</option>
                                    <option value="1">主任</option>
                                    <option value="2">老师</option>
                                    <option value="3">学生</option>
                                    <option value="4">实习</option>
                                </select>
                            </td>
                            <td className="header--or">
                                <label htmlFor="orderSelect">排序方式</label>
                                <select id="orderSelect" ref="selOrder" onChange={this.handleSort.bind(this)}>
                                    <option value="0">身份</option>
                                    <option value="1">年龄升</option>
                                    <option value="2">年龄降</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StaffHeader