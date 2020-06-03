import React, { Component } from 'react';
import SideBar from './components/sideBar';
import DashboardSection from './components/dashboardSection';
import { Layout } from 'antd';
import UsersSection from './components/usersSection';
import { Switch, Redirect, Route } from 'react-router-dom'
import ArticlesSection from './components/articlesSection';
import ArticleForm from './components/articleForm';


const { Content, Sider } = Layout;


class BreakingNews extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        marginRight: 210
                    }}
                >
                    <Switch> {/* from specific ones to general ones */}

                        <Route path="/breakingnews/articles/:id" render={(props) => <ArticleForm {...props} />} />

                        <Route path="/breakingnews/articles/new" render={(props) => <ArticleForm {...props} />} />

                        <Route path="/breakingnews/dashboard" render={(props) => <DashboardSection {...props} />} />
                        <Route path="/breakingnews/users" render={(props) => <UsersSection {...props} />} />
                        <Route path="/breakingnews/articles" render={(props) => <ArticlesSection {...props} />} />
                        <Route path="/breakingnews/br-not-found" render={() => <h2 style={{ marginTop: 70, textAlign: "center" }}>NotFound - Breaking News</h2>} />

                        <Redirect exact from='/breakingnews' to="/breakingnews/dashboard" />
                        <Redirect to="/breakingnews/br-not-found" />
                    </Switch>

                </Content>

                <Sider
                    theme="light"
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        right: 0,
                    }}>
                    <SideBar />
                </Sider>
            </Layout>
        );
    }
}

export default BreakingNews;