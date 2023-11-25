import axios from "axios";
import { imageUplode } from "../../../Hook/Image/ImageHost";

const AddPublisher = () => {

    const hendleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const logo = form.logo.files[0]
        console.log(name, logo)
        const formData = new FormData()
        formData.append('image', logo)
        const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KYE}`, formData)
        console.log(data?.data?.display_url)

    }

    return (
        <div className="flex justify-center h-full items-center">

            <form onSubmit={hendleSubmit} className="max-w-sm mx-auto">
                <div className="">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Logo</label>
                        <input type="file" name="logo" required />
                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    );
};

export default AddPublisher;