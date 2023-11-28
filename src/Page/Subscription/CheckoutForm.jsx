import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if(error){
            console.log(error)
        }else{
            console.log(paymentMethod)
        }
    }

    return (
        <div className='max-w-screen-sm mx-auto pt-12'>
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
                <button className='px-6 py-2 rounded-lg bg-blue-600 text-white mt-7' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;