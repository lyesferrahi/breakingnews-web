import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';
import { sendContactForm } from '../panel/services/mailService';

const { TextArea } = Input;
var isNewArticle;

class ContactForm extends Component {
    state = {
        currentArticle: {
            name: "",
            text: "",
            sender: ""
        }
    }

    async componentDidMount() {

    }

    handleChange = ({ currentTarget: input }) => {
        const currentArticle = { ...this.state.currentArticle }
        currentArticle[input.name] = input.value;
        this.setState({ currentArticle })
    }

    handleSubmit = async () => {
        const question = {
            name: this.state.currentArticle.name,
            sender: this.state.currentArticle.sender,
            text: this.state.currentArticle.text,
        }

        //Call service
        sendContactForm(question)

        //this.props.history.push("/");
    };

    handleBack = () => {
        this.props.history.push("/");
    }

    render() {
        const { currentArticle } = this.state;
        return (
            <div>
                <h2 style={{ textAlign: "center" }}>Contact us</h2>
                <Row>
                    <Col span={12} offset={6}>
                        <label>Name:</label><br />
                        <Input name="name" value={this.state.currentArticle.name} onChange={this.handleChange} />

                        <label>Email:</label><br />
                        <Input name="sender" value={this.state.currentArticle.sender} onChange={this.handleChange} />

                        <label>Question:</label><br />
                        <TextArea name="text" value={this.state.currentArticle.text} rows={20} onChange={this.handleChange} />

                        <Button onClick={this.handleBack} type="danger" >Back</Button>
                        <Button onClick={this.handleSubmit} type="primary" >Submit</Button>
                    </Col>
                </Row >
            </div >
        );
    }
}

export default ContactForm;