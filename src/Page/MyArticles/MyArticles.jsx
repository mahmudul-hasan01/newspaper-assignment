import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../Hook/AuthHook/useAuth";
import MyArticlesCart from "./MyArticlesCart";

const MyArticles = () => {
    const {user}=useAuth()
    const myArticles = async () => {
        const data = await axios.get(`http://localhost:5000/myArticles?email=${user?.email}`, { withCredentials: true })
        return data
    }
    const { data, refetch } = useQuery({
        queryKey: ['MyArticles'],
        queryFn: myArticles
    })
    console.log(data?.data)
    return (
        <div className="grid grid-cols-2">
            {
                data?.data.map(item=> <MyArticlesCart key={item._id} item={item}></MyArticlesCart>)
            }
        </div>
    );
};

export default MyArticles;