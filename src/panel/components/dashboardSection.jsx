import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import Users from './users';
import StatisticAction from './Statistic-Action'
import Articles from './articles';


class DashboardSection extends Component {
    state = {
        scrollSiz: 0,
        cars: ["BMW", "Mercedes", "Merco"]
    }
    display = () => {
        let result = [];
        for (var i = 0; i < 100; i++) {
            result.push(<br />);
            result.push(i);
        }
        return result;
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Divider>Users Dashboard</Divider>
                        <Users />
                    </Col>
                    <Col span={12}>
                        <Divider>Statistic $ Action</Divider>
                        <StatisticAction />
                    </Col>
                </Row>
                <Row>
                    <Col style={{ margin: "50px 100px" }}>
                        <Divider>Articles</Divider>
                        <Articles />
                    </Col>
                </Row>
            </div>

        );
    }
}

export default DashboardSection;