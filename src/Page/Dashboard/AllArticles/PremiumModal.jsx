import axios from "axios";
import { useState } from "react";

const PremiumModal = ({_id,refetch}) => {

    const [open, setOpen] = useState(false)

    const hendlePremium = (e) => {
        e.preventDefault()
        const form = e.target
        const premium = form.premium.value
        const data = { premium }
        console.log(data)
        axios.patch(`https://server-smoky-theta.vercel.app/premium/${_id}`,data )
            .then(data => console.log(data?.data))
            refetch()
    }

    return (
        <div>

        <button onClick={() => setOpen(!open)} data-modal-target="static-modal" data-modal-toggle="static-modal" className="block relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Decline
        </button>


        <div id="static-modal" data-modal-backdrop="static" aria-hidden="true" className={`absolute overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${open ? "visible" : "hidden"}`}>
            <div className="relative p-4 w-full max-w-2xl max-h-full">

                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Static modal
                        </h3>
                        <button onClick={() => setOpen(!open)} type="button" className="text-black  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="p-4 md:p-5 space-y-4">

                        <form onSubmit={hendlePremium} className="max-w-sm mx-auto">

                            <select name="premium" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                                <option>Yes</option>
                                <option>no</option>
                            </select>

                            

                            <button  className="text-white w-full mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Premium</button>

                        </form>

                    </div>

                </div>
            </div>
        </div>

    </div>
    );
};

export default PremiumModal;