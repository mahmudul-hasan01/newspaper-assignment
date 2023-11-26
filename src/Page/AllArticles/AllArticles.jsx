import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllArticlesCart from "./AllArticlesCart";
import { useState } from "react";

const AllArticles = () => {

    const [search,setSearch]=useState('')
    const status ='Approved'

    const addArticle = async () => {
        const data = await axios.get(`http://localhost:5000/approvedArticle?status=${status}`, { withCredentials: true })
        return data
    }
    const { data, refetch } = useQuery({
        queryKey: ['approvedArticle'],
        queryFn: addArticle
    })

    const searchData = async () => {
        const data = await axios.get(`http://localhost:5000/approved?search=${search}`, { withCredentials: true })
        return data
    }
    const { data:searchInfo } = useQuery({
        queryKey: ['searchData'],
        queryFn: searchData
    })



    const handleSearch=(e)=>{
        e.preventDefault()
        const search =e.target.search.value
        setSearch(search)
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input name="search" type="text" />
                <button className="py-2 text-white px-4 rounded-r-lg bg-blue-600">search</button>
            </form>
        <div className="grid grid-cols-2 gap-5">
            {
                data?.data.map(item => <AllArticlesCart key={item._id} item={item}></AllArticlesCart>)
            }
        </div>
        </div>
    );
};

export default AllArticles;