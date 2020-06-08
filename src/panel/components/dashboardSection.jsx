import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';
import Users from './users';
import StatisticAction from './Statistic-Action'
import Articles from './articles';
import axios from 'axios';



class DashboardSection extends Component {
    state = {
        scrollSiz: 0,
        cars: ["BMW", "Mercedes", "Merco"],
        phrase: ''
    }

    async componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        let { data } = await axios.get(proxyurl + 'https://www.affirmations.dev');
        console.log(data);
        const { affirmation } = data;
        this.setState({ phrase: affirmation })
    }

    render() {
        return (
            <div>
                <Row>
                    <div style={{ textAlign: "center", fontSize: 60, width: '100%' }}>{this.state.phrase}</div>
                </Row>
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