// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import CheckoutForm from './CheckoutForm';

const Subscription = () => {
    // const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
    const handleSubmit =(e)=>{
        e.preventDefault()
        const price = e.target.price.value
        console.log(parseInt(price.split(" ")[2]))
    }

    return (
        <div>
            {/* <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements> */}

            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">49</span>
                    <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <select name="price">
                        <option>1 Day 65 $</option>
                        <option>15 Day 300 $</option>
                        <option>1 Month 500 $</option>
                    </select>
                    <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                </form>
            </div>


        </div>
    );
};

export default Subscription;