import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PremiumCart from "./PremiumCart";

const PremiumArticles = () => {

    const premium = 'yes'
    const premiumArticles = async () => {
        const data = await axios.get(`https://server-smoky-theta.vercel.app/premiumArticle?premium=${premium}`, { withCredentials: true })
        return data
    }
    const { data, refetch } = useQuery({
        queryKey: ['premium'],
        queryFn: premiumArticles
    })
    console.log(data?.data)

    return (
        <div>
            <div className="grid grid-cols-1 gap-5 w-[100%] lg:w-[60%] mx-auto mt-10">
                {
                    data?.data.map(item => <PremiumCart key={item._id} item={item}></PremiumCart>)
                }
            </div>
        </div>
    );
};

export default PremiumArticles;