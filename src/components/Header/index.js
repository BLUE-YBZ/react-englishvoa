import React, { Component } from 'react';
import axios from 'axios';
import { Menu, Button } from 'antd';
import logo from './logo.png';
import './index.css'
class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: []
        }
    }    
    render() {
        return (
          <div id="AppHeader">
            <img class="app-english-logo" src={logo} alt="logo"/>
            <Menu mode="horizontal">
              {this.getMenuList()}
            </Menu>
              <div class="app-english-btn1"><Button type="primary">登录</Button></div>
              <div class="app-english-btn2"><Button class="app-english-btn2" type="primary">VIP</Button></div>   
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
    }

    getMenuList() {
        return this.state.menuList.map(item => {
            return (
              <Menu.Item key={item.id}>{item.title}</Menu.Item>
            )
        })
    }
}

export default AppHeader;