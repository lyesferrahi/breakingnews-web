import React, { Component } from 'react';
import { Statistic, Row, Col, Button } from 'antd';
import { LikeOutlined } from '@ant-design/icons';


class StatisticAction extends Component {
    state = {}
    render() {
        return (
            <div style={{ textAlign: "center", margin: 100 }}>
                <Row gutter={16} style={{ marginTop: 40 }}>
                    <Col span={12}>
                        <Statistic title="Active Users" value={112893} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                    </Col>
                </Row>
                <Row gutter={16} style={{ marginTop: 40 }}>
                    <Col span={12}>
                        <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Unmerged" value={93} suffix="/ 100" />
                    </Col>
                </Row>
                <Row style={{ marginTop: 40 }}>
                    <Col span={8}>
                        <Button type="omitted" shape="round" block={true} loading={true}>
                            Create a Combo
                            </Button>
                    </Col>
                    <Col span={8}>
                        {/* <Button type="primary">
                            Notify
                        </Button> */}
                    </Col>
                    <Col span={8}>
                        <Button type="danger" shape="round" block={true} loading={true}>
                            Scrap the web
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default StatisticAction;