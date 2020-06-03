import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col, Alert } from 'antd';
import { login, getCurrentUser } from './services/authService';
import { Redirect } from 'react-router-dom'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class LoginForm extends Component {
    state = {
        account: {
            username: "",
            password: ""
        },
        errors: {}
    }

    handleChange = ({ currentTarget: input }) => {
        const account = { ...this.state.account }
        account[input.name] = input.value;
        this.setState({ account, errors: {} })
    }

    onFinish = async (values) => {
        try {
            const { username, password } = this.state.account;
            await login(username, password);

            const { state } = this.props.location;
            window.location = state ? state.from.pathname : '/';
        } catch (error) {
            const errors = { ...this.state.errors };
            errors.username = error.response.data;
            this.setState({ errors });
        }

    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        if (getCurrentUser()) return <Redirect to="/" />

        return (
            <div style={{ paddingTop: 200, backgroundColor: "white" }}>
                <h2 style={{ textAlign: "center" }}>Login Form</h2>
                <Row>
                    <Col span={8}>
                    </Col>
                    <Col span={8}>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <div>
                                    <Input name="username" autoFocus onChange={this.handleChange} value={this.state.account.username} />
                                    {this.state.errors.username && <Alert message={this.state.errors.username} type="error" showIcon />}
                                </div>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password name="password" onChange={this.handleChange} />
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={8}>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default LoginForm;