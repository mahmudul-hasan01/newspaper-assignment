import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PremiumCart from "./PremiumCart";

const PremiumArticles = () => {

    const premium = 'yes'
    const premiumArticles = async () => {
        const data = await axios.get(`http://localhost:5000/premiumArticle?premium=${premium}`, { withCredentials: true })
        return data
    }
    const { data, refetch } = useQuery({
        queryKey: ['premium'],
        queryFn: premiumArticles
    })
    console.log(data?.data)

    return (
        <div>
            <div className="grid grid-cols-2 gap-5 mt-10">
                {
                    data?.data.map(item => <PremiumCart key={item._id} item={item}></PremiumCart>)
                }
            </div>
        </div>
    );
};

export default PremiumArticles;