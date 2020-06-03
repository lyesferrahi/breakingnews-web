import React, { Component } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import '../style.css'

import {
    BarChartOutlined,
    FolderOutlined,
    TwitterOutlined,
    TeamOutlined,
    VideoCameraOutlined,
    MoneyCollectOutlined,
    CloudServerOutlined
} from '@ant-design/icons';

class SideBar extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div>
                {/* <div className="logo" /> */}

                <h2 style={{ textAlign: "center", paddingTop: 10 }}>BREKING NEWS</h2>
                <Menu mode="inline" defaultSelectedKeys={['1']}>

                    <Menu.Item key="1" icon={<BarChartOutlined />}>
                        <NavLink to="/breakingnews/dashboard" >
                            Dashboard
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<TeamOutlined />}>
                        <NavLink to="/breakingnews/users" >
                            Users
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<FolderOutlined />}>
                        <NavLink to="/breakingnews/articles" >
                            Articles
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<TwitterOutlined />}>
                        Sources
                    </Menu.Item>
                    <Menu.Item key="5" icon={<VideoCameraOutlined />}>
                        Combos
                    </Menu.Item>
                    <Menu.Item key="6" icon={<MoneyCollectOutlined />}>
                        Sponsors
                    </Menu.Item>
                    <Menu.Item key="7" icon={<CloudServerOutlined />}>
                        Server
                    </Menu.Item>
                </Menu>
            </div>

        );
    }
}

export default SideBar;