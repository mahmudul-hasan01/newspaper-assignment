import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../Hook/AuthHook/useAuth";
import MyArticlesCart from "./MyArticlesCart";

const MyArticles = () => {
    const {user}=useAuth()
    const myArticles = async () => {
        const data = await axios.get(`https://server-smoky-theta.vercel.app/myArticles?email=${user?.email}`, { withCredentials: true })
        return data
    }
    const { data, refetch } = useQuery({
        queryKey: ['MyArticles'],
        queryFn: myArticles
    })
    console.log(data?.data)
    return (
        <div className="grid grid-cols-1 gap-5 w-[100%] lg:w-[60%] mx-auto mt-10">
            {
                data?.data.map(item=> <MyArticlesCart key={item._id} item={item}></MyArticlesCart>)
            }
        </div>
    );
};

export default MyArticles;