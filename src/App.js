import React, { Component } from 'react';
import MyForm from './MyForm';
import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';

class App extends Component {
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <Layout>
        <Header style={{ backgroundColor: '#f0f2f5', textAlign: 'center' }}>
          HEADER
        </Header>
        <Layout>
          <Sider width={150} style={{ backgroundColor: 'lightgrey' }}>
            <Row type="flex" align="middle" style={{ height: '100%' }}>
              <Col span={12} offset={6}>
                LEFT SIDE MENU
              </Col>
            </Row>
          </Sider>
          <Content style={{ backgroundColor: 'white' }}>
            <MyForm />
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>FOOTER</Footer>
      </Layout>
    );
  }
}

export default App;
