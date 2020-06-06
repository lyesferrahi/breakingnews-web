import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Row, Col } from 'antd';

import './styleDonation.css'

import CheckoutForm from './CheckoutForm';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51GqL1nAQMMYg7cSkn0IH1tRPmMAaSdnEonLR4tgq8YECVHwtsksO0qppyWFcPzvGCzvnN9bsCqVXw6ayie6XnSRI00Bji9EoSu");


/*(async () => {
    const response = await fetch('/secret');
    const { client_secret: clientSecret } = await response.json();
    // Call stripe.confirmCardPayment() with the client secret.

    console.log("secrret api");
    console.log(clientSecret);
})();*/


class Donation extends Component {
    state = {}

    render() {
        return (
            <Elements stripe={stripePromise}>
                <Row style={{ marginTop: 250, marginBottom: 400 }}>
                    <Col span={12} offset={6}>
                        <CheckoutForm />
                    </Col>
                </Row >
            </Elements >
        );
    }
}

export default Donation;