import React, {Component} from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom'
import axios from '_axios@0.21.3@axios';
import './index.css'

class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData : [],
            index: props.match.params.id
        }
    }
    render() {
        return (
          <List
           className="app-content-List"
            size="large"
            bordered
            dataSource={this.state.listData}
            renderItem={item => (<List.Item><Link to={`/detail/${item.id}`}>{item.title}</Link></List.Item>)}
           />
        )
    }

    UNSAFE_componentWillReceiveProps() {
    axios.get('http://www.dell-lee.com/react/api/list.json?id='+ this.props.match.params.id)
    .then(res => {
       this.setState({
           listData: res.data.data
       })
    })
   }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/list.json?id='+ this.props.match.params.id)
        .then(res => {
           this.setState({
               listData: res.data.data
           })
        })
    }
}
export default AppComponent;