import React, {Component} from 'react';
import { List } from 'antd';
import axios from '_axios@0.21.3@axios';
import './index.css'

class AppComponent extends Component {
    constructor(props) {
        console.log('propscontent',props)
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
            renderItem={item => <List.Item>{item.title}</List.Item>}
           />
        )
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('props改变',nextProps)
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