import React,{ Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import { Layout } from 'antd';
import AppHeader from './components/Header/index';
import AppComponent from './components/Content/index';
import Detail from './components/Content/Detail/index'

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
        <BrowserRouter>
          <Layout>
           <Header className="app-header">
             <AppHeader/>
           </Header>
           <Content className="app-content">
             <Switch>
               <Route path='/detail/:id' component={Detail}></Route>
               <Route path='/:id' component={AppComponent}></Route>
             </Switch>
           </Content>
           <Footer className="app-footer"><div className="app-Footer-content">@copyright Melody 2021</div></Footer>
         </Layout>
        </BrowserRouter>
    </Fragment>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root')); // 可与其他框架并存，react只会处理 div 为 id=“root”的标签内容

