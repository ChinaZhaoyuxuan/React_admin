import React,{Component} from  'react'
import {Form,Input,Button,Icon} from 'antd'
import PropTypes from 'prop-types'

const FormItem=Form.Item

 class LoginForm extends Component {

  static propTypes={
    login:PropTypes.func.isRequired
  }


   handleSubmit = (event) => {
     event.preventDefault()
     const {form} = this.props
     form.validateFields((err, values) => {
       if(!err) {
         const values = this.props.form.getFieldsValue()
         this.props.login(values)
        }else {

        }
      })

   }


   validatePwd=(rule,value,callback)=>{
     value=value.trim()
     if(value===''){
       callback('密码不能为空')
     }else if(value.length < 4||value.length > 8){
       callback('密码为4到8位字母或数字')
     }else {
       callback()
     }
   }

  render () {
    const {getFieldDecorator}=this.props.form

    return (
      <Form className='login-form' onSubmit={this.handleSubmit}>
        <Form.Item>
          {
            getFieldDecorator('userName',{
              initialValue:'admin',
              rules:[
                {required:true,message:'请输入用户名'},
                {min:4,message:'用户名长度不能小于4位'}
              ]
            })(
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
            )
          }
        </Form.Item>
        <FormItem>
          {
            getFieldDecorator('passWord', {
              initialValue:'',
              rules: [{validator:this.validatePwd}]
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />

            )
          }
        </FormItem>
        <Form.Item>
          <Button type='primary' className='login-form-button' htmlType='submit'>登陆</Button>
        </Form.Item>
      </Form>
    )
  }
}


export default Form.create()(LoginForm)

