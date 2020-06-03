import React, { Component } from 'react';
import { Row, Col, Button, Input } from 'antd';
import { getArticles } from '../services/articleService';

const { Search } = Input;

class ArticlesSection extends Component {
    state = {
        articles: [],
        searchKeyWord: ''
    }

    async componentDidMount() {
        console.log("componentDidMount - articleSection");
        const articles = await getArticles();
        this.setState({ articles: articles })
    }

    handleTitle = (id) => {
        this.props.history.push("/breakingnews/articles/" + id);
    }

    getFiltredArticles = () => {
        var filtredArticles = [...this.state.articles]

        filtredArticles = filtredArticles.filter(a => a.title.includes(this.state.searchKeyWord))
        return filtredArticles;
    }

    handleChange = (e) => {
        this.setState({ searchKeyWord: e.currentTarget.value });
    }

    render() {
        return (
            <div>
                <h2 style={{ textAlign: "center" }}>3 - Articles Section (COMMIN SOON)</h2>

                <Row>
                    <Col span={18} push={6}>
                        <Search placeholder="input search text" onChange={value => this.handleChange(value)} onSearch={value => console.log(value)} enterButton />
                    </Col>
                    <Col span={6} pull={18}>
                        <Button href="/breakingnews/articles/new" type="primary">new Article</Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: 100 }}>
                    <Col span={12} offset={6}>
                        {
                            this.getFiltredArticles().map(a => (
                                <div key={a._id}>
                                    <h2 onClick={() => this.handleTitle(a._id)}>{a.title}</h2>
                                    <p>{a.content}</p>
                                </div>
                            ))
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ArticlesSection;