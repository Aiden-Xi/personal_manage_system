import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StaffHeader extends Component {
    render() {
        return(
            <div className="staff--header">
                <h3 className="header--title">人员管理系统</h3>
                <table className="header--table">
                    <tbady>
                        <tr>
                            <td className="header--search">
                                <input type="text" className="search--input" ref='searchBar' placeholder="search..."/>
                            </td>
                            <td className="header--id">
                                <label htmlFor="idSelect">人员筛选</label>
                                <select ref="selId" id="idSelect">
                                    <option value="0">全部</option>
                                    <option value="1">主任</option>
                                    <option value="2">老师</option>
                                    <option value="3">学生</option>
                                    <option value="4">实习</option>
                                </select>
                            </td>
                            <td className="header--or">
                                <label htmlFor="orderSelect">排序方式</label>
                                <select id="orderSelect" ref="selOrder">
                                    <option value="0">身份</option>
                                    <option value="1">年龄升</option>
                                    <option value="2">年龄降</option>
                                </select>
                            </td>
                        </tr>
                    </tbady>
                </table>
            </div>
        )
    }
}

export default StaffHeader