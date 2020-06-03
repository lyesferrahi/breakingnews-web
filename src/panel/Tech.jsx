import React, { Component } from 'react';

class Tech extends Component {
    state = {}
    render() {
        const user = this.props.user;
        return (
            <div style={{ textAlign: "center" }} >
                <h2> Tech Section</h2>
                {user && <h3>This is secret data</h3>}
                {!user && <h3>Please log in to see this !</h3>}
            </div>
        );
    }
}

export default Tech;