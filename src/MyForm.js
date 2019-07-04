import React, { Component } from 'react';
import { Icon, List, Row, Col } from 'antd';

class MyForm extends Component {
  render() {
    const { Item } = List;
    return (
      <List style={{ backgroundColor: 'white' }} bordered={true}>
        <Item>
          <Row type="flex">
            <Col>Имя, телефон, email</Col>
            <Col>
              <Icon type="right" />
            </Col>
          </Row>
        </Item>
        <Item>
          <Row type="flex">
            <Col>Страна, часовой пояс, язык</Col>
            <Col>
              <Icon type="right" />
            </Col>
          </Row>
        </Item>
        <Item>
          <Row type="flex">
            <Col>Пароль и безопасность</Col>
            <Col>
              <Icon type="right" />
            </Col>
          </Row>
        </Item>
        <Item>
          <Row type="flex">
            <Col>Валюта</Col>
            <Col>
              <Icon type="right" />
            </Col>
          </Row>
        </Item>
        <Item>
          <Row type="flex">
            <Col>Social login</Col>
            <Col>
              <Icon type="right" />
            </Col>
          </Row>
        </Item>
        <Item>
          <Row type="flex">
            <Col>Удалить аккаунт</Col>
            <Col>
              <Icon type="right" />
            </Col>
          </Row>
        </Item>
      </List>
    );
  }
}

export default MyForm;
