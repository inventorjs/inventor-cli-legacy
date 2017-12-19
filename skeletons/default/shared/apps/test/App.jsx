/**
 * 应用入口
 *
 * @author : sunkeysun
 */

import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class App extends Component {
    render() {
        return (
        <Layout>
            <Layout>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>Apxf</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                  Content
                </Content>
              </Layout>
            </Layout>
        </Layout>
        )
    }
}
