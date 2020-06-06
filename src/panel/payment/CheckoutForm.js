import React from 'react';
import { ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import CardSection from './cardSection';
import { getSecret } from '../services/paymentService';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';


class CheckoutForm extends React.Component {



    openNotification = (arg) => {
        notification.open({
            message: arg,
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };

    handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        const { stripe, elements } = this.props

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make  sure to disable form submission until Stripe.js has loaded.
            console.log("oh nonn")
            return;
        }

        console.log("icii");
        console.log(stripe);

        const client_secret = await getSecret();
        console.log("response");
        console.log(client_secret);

        const result = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Lyes Ferrahi',
                },
            }
        });

        if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
            this.openNotification(result.error.message)
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {

                this.openNotification("The payment has been processed!")

                // Show a success message to your customer
                // There's a risk of the customer closing the window before callback
                // execution. Set up a webhook or plugin to listen for the
                // payment_intent.succeeded event that handles any business critical
                // post-payment actions.
            }
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <CardSection />
                <button disabled={!this.props.stripe}>Confirm order</button>
            </form>
        );
    }
}

export default function InjectedCheckoutForm() {
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => (
                <CheckoutForm stripe={stripe} elements={elements} />
            )}
        </ElementsConsumer>
    );
}