import React, { Component } from 'react';
import './style.css';
import { Layout } from 'antd';
import NavBar from './components/navBar';
import BreakingNews from './BreakingNews';
import Tech from './Tech';
import { Switch, Redirect, Route } from 'react-router-dom'
import LoginForm from './loginForm';
import { getCurrentUser } from './services/authService'
import ProtectedRoute from './components/common/protectedRoute';
import ContactForm from './contactForm';
import Donation from './donation';

const { Header, Footer } = Layout;

/*
    TEMPLATE OF :
    - layout: sidbar and nav : fixed (antD)
    - Authentification 
    - backend service
*/
class Panel extends Component {

    state = {
    };

    componentDidMount() {
        const user = getCurrentUser()
        this.setState({ user });
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
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <NavBar user={this.state.user} />
                </Header>
                <Layout style={{ marginTop: 64 }}>
                    <Switch> {/* from specific ones to general ones */}
                        <Route path="/breakingnews" render={(props) => <BreakingNews {...props} />} />
                        <ProtectedRoute path="/tech" render={(props) => <Tech {...props} user={this.state.user} />} />
                        <Route path="/login" render={(props) => <LoginForm {...props} />} />
                        <Route path="/contact" render={(props) => <ContactForm {...props} />} />
                        <Route path="/donation" render={(props) => <Donation {...props} />} />
                        <Route path="/not-found" render={() => <h2 style={{ marginTop: 70 }}>NotFound</h2>} />
                        <Redirect exact from="/" to="/breakingnews" />
                        <Redirect to="/not-found" />
                    </Switch>
                </Layout >
                <Footer style={{ textAlign: 'center' }}>BrekingNews ©2020 Created by Lyes Ferrahi</Footer>
            </Layout >
        );
    }
}

export default Panel;