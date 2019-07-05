import React from 'react';
import { Icon, Row, Col, List } from 'antd';

const { Item } = List;

const Field = ({ field_title, toggleDrawer }) => (
  <Item onClick={toggleDrawer} style={{cursor: 'pointer'}}>
    <Row type="flex" justify="space-between" style={{width: '100%'}}>
      <Col>{field_title}</Col>
      <Col>
        <Icon type="right"/>
      </Col>
    </Row>
  </Item>
)

export default Field;