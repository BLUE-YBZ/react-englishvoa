import React,{ Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css';
import { Layout } from 'antd';
import AppHeader from './components/Header/index';
import AppComponent from './components/Content/index';

const { Header, Footer,  Content } = Layout;
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     menuList: []
  //   }
  // }
 
  render() {
    return (
      <Fragment>
      <Layout style={{minWidth: '1100px'}}>
       <Header style={{backgroundColor: '#ffff'}}>
         <AppHeader/>111
       </Header>
       <Content style={{height:'80%'}}>
         <AppComponent/>
       </Content>
       <Footer style={{height:'10%'}}>Footer</Footer>
     </Layout>
    </Fragment>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root')); // 可与其他框架并存，react只会处理 div 为 id=“root”的标签内容

