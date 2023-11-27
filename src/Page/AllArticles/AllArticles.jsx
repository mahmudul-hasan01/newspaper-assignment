import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllArticlesCart from "./AllArticlesCart";
import { useState } from "react";

const AllArticles = () => {

    const [search, setSearch] = useState('')
    console.log(search)
    const status = 'Approved'

    const addArticle = async () => {
        const data = await axios.get(`http://localhost:5000/approvedArticle?search=${search}&status=${status}`, { withCredentials: true })
        return data
    }
    const { data, refetch } = useQuery({
        queryKey: ['approvedArticle'],
        queryFn: addArticle
    })
    console.log(data?.data)

    // const searchData = async () => {
    //     const data = await axios.get(`http://localhost:5000/approved?search=${search}`, { withCredentials: true })
    //     return data
    // }
    // const { data:searchInfo } = useQuery({
    //     queryKey: ['searchData'],
    //     queryFn: searchData
    // })
    // console.log(searchInfo?.data)


    const handleSearch = (e) => {
        e.preventDefault()
        const search = e.target.search.value
        setSearch(search)
        refetch()
    }

    return (
        <div>




            <form onSubmit={handleSearch}>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-[320px] flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input name="search" type="search" id="default-search" className="block mx-auto w-1/2 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" className="text-white absolute right-[340px] bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>






            {/* <form onSubmit={handleSearch}>
                <input name="search" type="text" />
                <button className="py-2 text-white px-4 rounded-r-lg bg-blue-600">search</button>
            </form> */}
            <div className="grid grid-cols-2 gap-5 mt-10">
                {
                    data?.data.map(item => <AllArticlesCart key={item._id} item={item}></AllArticlesCart>)
                }
            </div>
        </div>
    );
};

export default AllArticles;