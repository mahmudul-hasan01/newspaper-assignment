import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ArticleInfo from "./ArticleInfo";

const AllArticle = () => {
    const publisherInfo = async () => {
        const data = await axios.get(`https://server-smoky-theta.vercel.app/addArticle`, { withCredentials: true })
        return data
    }
    const { data, refetch } = useQuery({
        queryKey: ['addArticle'],
        queryFn: publisherInfo
    })

    return (
        <div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Photo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Post Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Publisher
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Approve
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Decline
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Premium
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                        </tr>
                    </thead>
                        {
                            data?.data.map(item => <ArticleInfo key={item._id} refetch={refetch} info={item}></ArticleInfo>)
                        }
                </table>
            </div>

        </div>
    );
};

export default AllArticle;