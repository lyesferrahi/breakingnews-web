import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';
//import { getArticle, saveArticle, updateArticle } from '../services/articleService';

const { TextArea } = Input;
var isNewArticle;

class ContactForm extends Component {
    state = {
        currentArticle: {
            _id: "",
            title: "",
            content: "",
            source: ""
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
        const submitedArticle = {
            _id: this.state.currentArticle._id,
            title: this.state.currentArticle.title,
            source: this.state.currentArticle.source,
            content: this.state.currentArticle.content,
        }

        //Call service
        //..

        this.props.history.push("/");
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
                        <Input name="title" value={this.state.currentArticle.title} onChange={this.handleChange} />

                        <label>Email:</label><br />
                        <Input name="source" value={this.state.currentArticle.source} onChange={this.handleChange} />

                        <label>Question:</label><br />
                        <TextArea name="content" value={this.state.currentArticle.content} rows={20} onChange={this.handleChange} />

                        <Button onClick={this.handleBack} type="danger" >Back</Button>
                        <Button onClick={this.handleSubmit} type="primary" >Submit</Button>
                    </Col>
                </Row >
            </div >
        );
    }
}

export default ContactForm;