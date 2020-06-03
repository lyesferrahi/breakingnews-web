import React, { Component } from 'react';
import { Row, Col } from 'antd';
import * as userService from '../services/userService'

class UsersSection extends Component {
    state = {
        users: [],
    }

    async componentDidMount() {
        console.log("componentDidMount - articleSection");
        const users = await userService.getUsers();
        this.setState({ users });
        console.log("env : ", process.env.REACT_APP_API_URL);
    }

    render() {
        return (
            <div>
                <h2 style={{ marginTop: 70, textAlign: "center" }}>2 - Users Section</h2>
                <Row style={{ marginTop: 100 }}>
                    <Col span={12} offset={6}>
                        {
                            this.state.users.map(a => (
                                <div key={a._id}>
                                    <h2>Name : {a.name}</h2>
                                    <h4>Email : {a.email}</h4>
                                    <h4>Password : {a.password}</h4>
                                    <h4>ID : {a._id}</h4>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            ))
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UsersSection;