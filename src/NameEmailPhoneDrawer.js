import React, { Fragment } from 'react';
import { Input, Collapse, Layout } from 'antd';

const { Header } = Layout;
const { Panel } = Collapse;

const NameEmailPhoneDrawer = ({ field_title, first_name, last_name, email, phone, handleChange }) => (
  <Fragment>
    <Header style={{ backgroundColor: '#f0f2f5', textAlign: 'center', marginTop: 50 }}>{field_title}</Header>
    <Collapse bordered={false}>
      <Panel header="ИМЯ ФАМИЛИЯ" key="1">
        <Input name="first_name" value={first_name} allowClear={true} onChange={handleChange}/>
        <Input name="last_name" value={last_name} allowClear={true} onChange={handleChange}/>
      </Panel>
      <div>{first_name} {last_name}</div>
      <Panel header="EMAIL" key="2">
        <Input name="email" value={email} allowClear={true} onChange={handleChange}/>
        <p>
          <span>
            После изменения email его нужно будет верифицировать
          </span>
        </p>
      </Panel>
      <div>{email}</div>
      <Panel header="PHONE" key="3">
        <Input name="phone" value={phone} allowClear={true} onChange={handleChange}/>
      </Panel>
        <div>{phone}</div>
    </Collapse>
  </Fragment>
)

export default NameEmailPhoneDrawer;