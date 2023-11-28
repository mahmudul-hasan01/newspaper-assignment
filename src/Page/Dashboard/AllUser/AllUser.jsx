import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserCart from "./UserCart";

const AllUser = () => {

    const userInfo = async () => {
        const data = await axios.get(`http://localhost:5000/user`, { withCredentials: true })
        return data
    }
    const { data, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: userInfo
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
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Make Admin
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                        {
                            data?.data.map(item =><UserCart key={item._id} refetch={refetch} info={item}></UserCart>)
                        }
                </table>
            </div>
        </div>
    );
};

export default AllUser;