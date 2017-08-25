import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class StaffFooter extends Component {
    static propTypes = {
        addStaffItem: PropTypes.func
    }

    handlerAddClick(event) {
        event.preventDefault();
        if (this.props.addStaffItem) {
            let item = {}
            let addForm = ReactDOM.findDOMNode(this.refs.addForm)

            let sex = addForm.querySelector('#staffAddSex');
            let identity = addForm.querySelector('#staffAddIdentity');

            item.name = addForm.querySelector('#staffAddName').value.trim();
            item.age = addForm.querySelector('#staffAddAge').value.trim();
            item.description = addForm.querySelector('#staffAddDescription').value.trim();
            item.sex = sex.options[sex.selectedIndex].value;
            item.identity = identity.options[identity.selectedIndex].value;

            /*
             *表单验证
             */
            if(item.name==='' || item.age==='' || item.description==='') {
                let tips = ReactDOM.findDOMNode(this.refs.tipsUnDone);
                tips.style.display = 'block';
                setTimeout(function(){
                    tips.style.display = 'none';
                }, 1000);
                return;
            }
            //非负整数
            let numReg = /^\d+$/;
            if(!numReg.test(item.age) || parseInt(item.age, 10)>150) {
                let tips = ReactDOM.findDOMNode(this.refs.tipsUnAge);
                tips.style.display = 'block';
                setTimeout(function(){
                    tips.style.display = 'none';
                }, 1000);
                return;
            }

            this.props.addStaffItem(item);
            addForm.reset();

            //此处应在返回添加成功信息后确认
            let tips = ReactDOM.findDOMNode(this.refs.tips);
            tips.style.display = 'block';
            setTimeout(function(){
                tips.style.display = 'none';
            }, 1000);
        }
    }

    render() {
        return (
            <div>
                <h3 className="footer--title">人员新增</h3>
                <hr/>
                <form ref="addForm" className="addForm">
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
                        <label htmlFor="staffAddIdentity" style={{display: 'block'}}>身份</label>
                        <select id="staffAddIdentity" ref="addId">
                            <option value="主任">主任</option>
                            <option value="老师">老师</option>
                            <option value="学生">学生</option>
                            <option value="实习">实习</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="staffAddDescription" style={{display: 'block'}}>个人描述</label>
                        <textarea ref="addDescription" id="staffAddDescription" type="text"></textarea>
                    </div>
                    <p ref="tips" className="tips">提交成功</p>
                    <p ref="tipsUnDone" className="tips">请输入完整的人员信息</p>
                    <p ref="tipsUnAge" className="tips">请输入正确的年龄</p>
                    <div>
                        <button onClick={this.handlerAddClick.bind(this)}>提交</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default StaffFooter