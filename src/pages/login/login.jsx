import React, {Component} from 'react'
import LoginForm from './login_form'
import logo from './images/logo.png'
import './index.less'


export default class Login extends Component {
  state={
    errMsg:''
  }
  login=({userName,passWord})=>{
      alert(`发送Ajax请求:username=${userName},${passWord}`)
  }
  render() {
    return (
      <div className='login'>
          <div className='login-header'>
              <img src={logo} alt=""/>
              React项目：后台管理系统
          </div>
          <div className='login-content'>
              <div className='login-box'>
                  <div className='error-msg-wrap'></div>
                  <div className='title'>用户登录</div>
                  <LoginForm login={this.login}/>
              </div>
          </div>
      </div>
    )
  }
}