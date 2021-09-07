import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Card } from 'antd'
import './index.css'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailData: []
        }
    }

    render() {
        return (
        <Fragment>
          <Card title={this.state.detailData.title} bordered={false} style={{ width: '98%',margin: '2% 1%' }}>
            <div dangerouslySetInnerHTML={{__html:this.state.detailData.content}}></div>
          </Card>
        </Fragment>
        )
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/detail.json?id=' + this.props.match.params.id)
        .then(res => {
            console.log(res)
            this.setState({
                detailData: res.data.data
            })
        })
    }
}

export default Detail;