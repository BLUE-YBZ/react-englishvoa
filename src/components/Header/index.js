import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Menu, Button, Modal, Input, message } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import logo from './logo.png';
import './index.css'
class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [],
            current: '1',
            login: false, // 未登录
            showModal: false,
            pwd: '',
            account: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickBtn = this.handleClickBtn.bind(this)
        this.handleClickModal = this.handleClickModal.bind(this)
        this.handleClickOk = this.handleClickOk.bind(this)
        this.changeAccount = this.changeAccount.bind(this)
        this.changePwd = this.changePwd.bind(this)
        this.handleClickBack = this.handleClickBack.bind(this)
    }    
    render() {
        const { current } = this.state
        return (
          <div id="AppHeader">
            <img className="app-english-logo" src={logo} alt="logo"/>
            <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[current]}>
              {this.getMenuList()}
            </Menu>
            {!this.state.login ? <div className="app-english-btn2"><Button type="primary" onClick={this.handleClickBtn}>登录</Button></div> :
            <div className="app-english-btn2"><Button type="primary" onClick={this.handleClickBack}>退出</Button></div> }
            <Modal 
                title="登录"
                visible={this.state.showModal}
                onCancel={this.handleClickModal}
                onOk={this.handleClickOk}
            >
                <Input 
                  size="large" placeholder="请输入账号"
                  style={{marginBottom: '10px'}}
                  prefix={<UserOutlined />}
                  value={this.state.account}
                  onChange={this.changeAccount}
                />
                <Input.Password 
                  placeholder="请输入密码"
                  value={this.state.pwd}
                  onChange={this.changePwd}
                />
            </Modal>   
          </div>
        )
    }
    
    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/header.json')
        .then((res)=> {
            this.setState({
                menuList: res.data.data
            })
        })
        axios.get('http://www.dell-lee.com/react/api/isLogin.json',{
            withCredentials:true
        }).then( res => {
            // 查看用户是否登录，返回值是一个布尔值，表示是否登录
            this.setState({
                login: res.data.data.login
            })
        })
    }
    
    handleClickBack() {
        axios.get('http://www.dell-lee.com/react/api/logout.json',{
            withCredentials: true
        }).then((res) => {
            this.setState({
                login: !res.data.data.logout
            })
        })
    }

    changeAccount(e) {
        this.setState({
            account: e.target.value
        })
    }

    changePwd(e) {
        this.setState({
            pwd: e.target.value
        })
    }

    handleClickOk() {
        if (this.state.account === '' || this.state.pwd === '') {
            message.error('账户或密码为空');
            return
        } else {
            const user = this.state.account
            const pwd = this.state.pwd
            axios.get(`http://www.dell-lee.com/react/api/login.json?user=${user}&password=${pwd}`,{
                withCredentials:true
            }).then((res) => {
                message.success('登录成功');
                // 验证账号密码是否正确返回的也是布尔值
                this.setState({
                    login: res.data.data.login,
                    showModal: false
                })
                return
            },(e)=> {
                message.error('账户不存在或密码错误');
            })
        }
        
    }

    handleClickModal() {
        this.setState({
            showModal: false
        })
    }

    handleClickBtn() {
        this.setState({
            showModal: true
        })
    }

    handleClick (e) {
        this.setState({ current: e.key });
    };

    getMenuList() {
        const { current } = this.state
        console.log('current',current)
        return this.state.menuList.map(item => {
            return (
              <Menu.Item key={item.id}>
                  {console.log('link',current)}
                  <Link to={`/${current}`}>{item.title}</Link>
              </Menu.Item>
            )
        })
    }
}

export default AppHeader;