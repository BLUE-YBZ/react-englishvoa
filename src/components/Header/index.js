import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import logo from './logo.png';
import './index.css'
class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [],
            current: '1'
        }
        this.handleClick = this.handleClick.bind(this)
    }    
    render() {
        const { current } = this.state
        return (
          <div id="AppHeader">
            <img className="app-english-logo" src={logo} alt="logo"/>
            <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[current]}>
              {this.getMenuList()}
            </Menu>
              <div className="app-english-btn1"><Button type="primary">登录</Button></div>
              <div className="app-english-btn2"><Button type="primary">VIP</Button></div>   
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