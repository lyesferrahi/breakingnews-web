import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';
import { getArticle, saveArticle, updateArticle } from '../services/articleService';

const { TextArea } = Input;
var isNewArticle;

class ArticleForm extends Component {
    state = {
        currentArticle: {
            _id: "",
            title: "",
            content: "",
            source: ""
        }
    }

    async componentDidMount() {
        var id = this.props.match.params.id;
        isNewArticle = (id === "new") ? true : false;
        if (isNewArticle) return;

        const article = await getArticle(this.props.match.params.id);
        if (!article) this.props.history.push("/breakingnews/br-not-found");

        this.setState({ currentArticle: article });
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

        // new Article
        if (isNewArticle) {
            await saveArticle(submitedArticle);
        }
        // update article
        else {
            await updateArticle(submitedArticle)
        }

        this.props.history.push("/breakingnews/articles");
    };

    handleBack = () => {
        this.props.history.push("/breakingnews/articles");
    }

    render() {
        const { currentArticle } = this.state;
        return (
            <div>
                <h2 style={{ textAlign: "center" }}>New Article - {currentArticle ? currentArticle.title : null}</h2>
                <Row>
                    <Col span={12} offset={6}>
                        <label>Title:</label><br />
                        <Input name="title" value={this.state.currentArticle.title} onChange={this.handleChange} />

                        <label>Source:</label><br />
                        <Input name="source" value={this.state.currentArticle.source} onChange={this.handleChange} />

                        <label>Content:</label><br />
                        <TextArea name="content" value={this.state.currentArticle.content} rows={20} onChange={this.handleChange} />

                        <Button onClick={this.handleBack} type="danger" >Back</Button>
                        <Button onClick={this.handleSubmit} type="primary" >Submit</Button>
                    </Col>
                </Row >
            </div >
        );
    }
}

export default ArticleForm;