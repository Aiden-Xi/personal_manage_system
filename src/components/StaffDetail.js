import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class StaffDetail extends Component {
    static propTypes = {
        staffDetail: PropTypes.any,
        closeDetail: PropTypes.func,
        editDetail: PropTypes.func
    }

    componentDidUpdate() {
        if (this.props.staffDetail !== null) {
            let selSex = ReactDOM.findDOMNode(this.refs.selSex)
            for (let i = 0; i < selSex.options.length; i++) {
                if (selSex.options[i].value === this.props.staffDetail.info.sex) {
                    selSex.options[i].selected = 'selected'
                    break
                }
            }

            let selIdentity = ReactDOM.findDOMNode(this.refs.selIdentity)
            for (let i = 0; i < selIdentity.options.length; i++) {
                if (selIdentity.options[i].value === this.props.staffDetail.info.identity) {
                    selIdentity.options[i].selected = 'selected'
                    break
                }
            }
        }
    }

    handleOnClose() {
        this.props.closeDetail()
    }

    handleOnEdit() {
        let item = {}
        let editTable = ReactDOM.findDOMNode(this.refs.editTable)
        let sex = editTable.querySelector('#staffEditSex')
        let identity = editTable.querySelector('#staffEditIdentity')

        // trim() str.trim()  去除字符串对于的空格
        item.name = editTable.querySelector('#staffEditName').value.trim()
        item.age = editTable.querySelector('#staffEditAge').value.trim()
        item.description = editTable.querySelector('#staffEditDescription').value.trim()
        item.sex = sex.options[sex.selectedIndex].value
        item.identity = identity.options[identity.selectedIndex].value
        item.key = this.props.staffDetail.key

        // 表单验证
        if (item.name === '' || item.age === '' || item.description === '') {
            let tips = ReactDOM.findDOMNode(this.refs.DtipsUnDone)
            tips.style.display = 'block'
            setTimeout(() => {
                tips.style.display = 'none'
            }, 1000)
            return
        }
        // 非负整数
        let numReg = /^\d+$/
        if (!numReg.test(item.age) || parseInt(item.age, 10) > 150) {
            let tips = ReactDOM.findDOMNode(this.refs.DtipsUnAge)
            tips.style.display = 'block'

            setTimeout(() => {
                tips.style.display = 'none'
            }, 1000)
            return
        }

        this.props.editDetail(item)

        // 这里应该在返回修改成功信息后确认
        let tips = ReactDOM.findDOMNode(this.refs.Dtips)
        tips.style.display = 'block'
        setTimeout(()=> {
            tips.style.display = 'none'
        }, 1000)
    }

    render() {
        let staffDetail = this.props.staffDetail
        if (!staffDetail) return null

        return (
            <div className="overLay">
                <h4>点击'完成'保存修改，点击'关闭'放弃未保存修改并退出</h4>
                <hr/>
                <table ref="editTable">
                    <tbody>
                    <tr>
                        <th>姓名</th>
                        <td><input type="text" id="staffEditName" defaultValue={staffDetail.info.name}/></td>
                    </tr>
                    <tr>
                        <th>年龄</th>
                        <td><input type="text" id="staffEditAge" defaultValue={staffDetail.info.age}/></td>
                    </tr>
                    <tr>
                        <th>性别</th>
                        <td>
                            <select id="staffEditSex" ref="selSex">
                                <option value="男">男</option>
                                <option value="女">女</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>身份</th>
                        <td>
                            <select id="staffEditIdentity" ref="selIdentity">
                                <option value="主任">主任</option>
                                <option value="老师">老师</option>
                                <option value="学生">学生</option>
                                <option value="实习">实习</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>个人描述</th>
                        <td>
                            <textarea id="staffEditDescription" cols="10" rows="3" type="text"
                                      defaultValue={staffDetail.info.description}>
                            </textarea>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p ref="Dtips" className="tips">修改成功</p>
                <p ref="DtipsUnDone" className="tips">请录入完整的个人信息</p>
                <p ref="DtipsUnAge" className="tips">请录入正确的年龄</p>
                <button onClick={this.handleOnEdit.bind(this)}>完成</button>
                <button onClick={this.handleOnClose.bind(this)}>关闭</button>
            </div>
        )
    }
}

export default StaffDetail