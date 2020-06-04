import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { logout } from '../services/authService'
import { LogoutOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

class NavBar extends Component {
    state = {
    }
    handleLogout() {
        logout();
        window.location = '/';
    }
    render() {
        const user = this.props.user;
        return (
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><Link to="/breakingnews">Breaking news</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/tech">Tech</Link></Menu.Item>
                    <Menu.Item key="3">Business</Menu.Item>
                    <Menu.Item key="4">Football</Menu.Item>
                    <Menu.Item key="10"><Link to="/contact">Contact us</Link></Menu.Item>
                    <Menu.Item key="11">Pricing</Menu.Item>
                    <Menu.Item key="12"><Link to="/donation">Donation</Link></Menu.Item>
                    {user && <Menu.Item key="5">Forex</Menu.Item>}
                    {user && <Menu.Item key="6">Real estate</Menu.Item>}

                    {user && <Menu.Item icon={<LogoutOutlined />} style={{ float: "right" }} key="7" onClick={this.handleLogout}>Logout</Menu.Item>}
                    {user && <Menu.Item icon={<UserOutlined />} style={{ float: "right" }} key="9"><Link to="/profil">{user.name}</Link></Menu.Item>}
                    {!user && <Menu.Item icon={<LoginOutlined />} style={{ float: "right" }} key="8"><Link to="/login">Login</Link></Menu.Item>}
                </Menu>
            </Header >
        );
    }
}

export default NavBar;