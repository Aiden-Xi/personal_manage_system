import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class StaffFooter extends Component {

    handlerAddClick() {

    }

    render() {
        return (
            <div>
                <h3 className="footer--title">人员新增</h3>
                <hr/>
                <from ref="addFrom" className="addFrom">
                    <div>
                        <label htmlFor="staffAddName" style={{display: 'block'}}>姓名</label>
                        <input type="text" ref="addName" id="staffAddName" placeholder="Your Name"/>
                    </div>
                    <div>
                        <label htmlFor="staffAddAge" style={{display: 'block'}}>年龄</label>
                        <input type="text" ref="addAge" id="staffAddAge" placeholder="Your Age(0-150)"/>
                    </div>
                    <div>
                        <label htmlFor="staffAddSex" style={{ display: 'block' }}>性别</label>
                        <select id="staffAddSex" ref="addSex">
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="staffAddId" style={{display: 'block'}}>身份</label>
                        <select id="staffAddId" ref="addId">
                            <option value="主任">主任</option>
                            <option value="老师">老师</option>
                            <option value="学生">学生</option>
                            <option value="实习">实习</option>
                        </select>
                    </div>
                    <div>
                        <label hotmFor="staffAddDescription" style={{display: 'block'}}>个人描述</label>
                        <textarea ref="addDescription" id="staffAddDescription" type="text"></textarea>
                    </div>
                    <p ref="tips" className="tips">提交成功</p>
                    <p ref="tipsUnDone" className="tips">请输入完整的人员信息</p>
                    <p ref="tipsUnAge" className="tips">请输入正确的年龄</p>
                    <div>
                        <button onClick={this.handlerAddClick.bind(this)}>提交</button>
                    </div>
                </from>
            </div>
        )
    }
}

export default StaffFooter