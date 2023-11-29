import { FaCrown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllArticlesCart = ({ item }) => {
    const { _id, title, image, publisher, description, premium} = item
    
    return (
        <div>

            <div className="w-full bg-white border relative border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={image} alt="" />
                </a>
                <div className="p-5">
                        <p className="mb-2 text-xl font-bold  text-red-600 dark:text-white"><span className="text-black">Publisher:</span> {publisher}</p>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <Link  to={`/articlesDetails/${_id}`}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        More Details
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                    {
                        premium === 'yes' && <p className="absolute top-5 left-5 px-4 py-2 rounded-lg bg-black text-white text-2xl"><FaCrown /></p>
                    }
                </div>
            </div>

        </div>
    );
};

export default AllArticlesCart;