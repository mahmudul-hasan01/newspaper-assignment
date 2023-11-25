import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import AllArticles from "../AllArticles/AllArticles";
import { useState } from "react";
import SelectTag from "../Dashboard/AddPublisher/SelectTag";
import useAuth from "../../Hook/AuthHook/useAuth";
// import Select from 'react-select'

const AddArticles = () => {
    const [tags,setTags]=useState(null)
    const {user}=useAuth()
    const name = user?.displayName
    const email = user?.email
    const photo =user?.photoURL


    const publisherInfo = async () => {
        const data = await axios.get(`http://localhost:5000/publisher`, { withCredentials: true })
        return data
    }
    const { data } = useQuery({
        queryKey: ['publisher'],
        queryFn: publisherInfo
    })


    const hendleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const images = form.image.files[0]
        const publisher = form.publisher.value
        const description = form.description.value
        const formData = new FormData()
        formData.append('image', images)
        const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KYE}`, formData)
        const image =data?.data?.display_url
        const allData ={
            title,
            image,
            data,
            publisher,
            description,
            tags,
            name,
            photo,
            email,
            status:'pending',
            premiim:''
        }
        

        // const logo =data?.data?.display_url
        // const publisherData ={name , logo}
        // await axios.post('http://localhost:5000/publisher')
        // .then(res=> console.log(res.data))

    }
    // const selectdata =()=>{
        
    //     const options = [
    //       { value: 'chocolate', label: 'Chocolate' },
    //       { value: 'strawberry', label: 'Strawberry' },
    //       { value: 'vanilla', label: 'Vanilla' }
    //     ]
        
    //     const MyComponent = (data) => (
    //       setPublisher(data.value)
    //       )
    //     return <Select options={options} onChange={MyComponent}/>
    // }
    // console.log(selectdata)


    return (
        <div>

            <form onSubmit={hendleSubmit} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <select name="publisher" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                        {
                            data?.data.map((item, index) => <option key={index}>{item.name}</option>)
                        }
                    </select>
                </div>
                <SelectTag setTags={setTags}></SelectTag>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Title</label>
                    <input type="text" name="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                
                <div >
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea id="message" name="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"></textarea>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Logo</label>
                    <input type="file" name="image" required />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>

        </div>
    );
};

export default AddArticles;