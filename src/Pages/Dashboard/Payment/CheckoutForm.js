import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({data}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);

    const {buyer, email, resale_price} = data;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify({ resale_price }),
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [resale_price]);


    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            setCardError(error.message);
        }else{
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: buyer,
                  email: email
                },
              },
            },
        );

        if(confirmError){
            setCardError(confirmError.message);
            return;
        }
        if(paymentIntent.status === "succeeded"){
            setSuccess('Congrats! Your payment completed');
            setTransactionId(paymentIntent.id)
        }
        setProcessing(false);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                <button  className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
                {cardError && <p className='text-red-600'>{cardError}</p>}
                {success && <div>
                    <p className='text-green-600'>{success}</p>
                    <p className='text-neutral'>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>}
        </>
    );
};

export default CheckoutForm;