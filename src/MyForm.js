import React, { Component } from 'react';
import { List, Drawer, Layout, Row, Col } from 'antd';
import Field from './Field';
import NameEmailPhoneDrawer from './NameEmailPhoneDrawer';

class MyForm extends Component {
  state = {
    visible: false,
    first_name: 'Владимир',
    last_name: 'Попов',
    email: 'test@mail.com',
    phone: '+315848456456',
    fields: [
      'Имя, телефон, email',
      'Страна, часовой пояс, язык',
      'Пароль и безопасность',
      'Валюта',
      'Social login',
      'Удалить аккаунт'
    ],
    drawField: ''
  };

  showDrawer = index => () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
      drawField: index
    }));
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      phone,
      fields,
      drawField
    } = this.state;
    const { Header } = Layout;
    return (
      <div style={{ margin: '100px' }}>
        <Header style={{ backgroundColor: '#999', textAlign: 'center' }}>
          <Row type="flex" justify="space-between" style={{ width: '100%' }}>
            <Col>
              <span>
                {first_name} {last_name}
              </span>{' '}
              <span>{email}</span>
            </Col>
            <Col>
              <span>ID 28366</span> <span>Демо режим</span>
            </Col>
          </Row>
        </Header>
        <List
          style={{ backgroundColor: 'white' }}
          bordered={true}
          itemLayout="vertical"
        >
          {fields.map((item, index) => (
            <Field
              key={`${item}${index}`}
              toggleDrawer={this.showDrawer(index)}
              field_title={item}
            />
          ))}
        </List>
        {drawField === 0 && (
          <Drawer
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible}
            mask={false}
            width={600}
          >
            <NameEmailPhoneDrawer
              field_title={fields[0]}
              first_name={first_name}
              last_name={last_name}
              email={email}
              phone={phone}
              handleChange={this.handleChange}
            />
          </Drawer>
        )}
      </div>
    );
  }
}

export default MyForm;
