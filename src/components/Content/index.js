import React, {Component} from 'react';
import { Card } from 'antd';

class AppComponent extends Component {
    render() {
        return (
          <Card title="Card title" bordered={false} style={{ width: '98%' , margin: '1%' }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        )
    }
}
export default AppComponent;