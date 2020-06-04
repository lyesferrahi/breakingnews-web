import React, { Component } from 'react';

(async () => {
    const response = await fetch('/secret');
    const { client_secret: clientSecret } = await response.json();
    // Call stripe.confirmCardPayment() with the client secret.

    console.log("secrret api");
    console.log(clientSecret);
})();

class Donation extends Component {
    state = {}

    render() {
        return (
            <div>
                <h1>Donate</h1>


            </div>
        );
    }
}

export default Donation;