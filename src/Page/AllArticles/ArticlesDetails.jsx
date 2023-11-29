import { FaCrown } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const ArticlesDetails = () => {
    const data =useLoaderData()
    const { _id, title, image, publisher, description, premium} = data
    return (
        <div>
             <div className="w-[60%] mx-auto bg-white border relative border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={image} alt="" />
                </a>
                <div className="p-5">
                        <p className="mb-2 text-xl font-bold  text-red-600 dark:text-white"><span className="text-black">Publisher:</span> {publisher}</p>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    {
                        premium === 'yes' && <p className="absolute top-5 left-5 px-4 py-2 rounded-lg bg-black text-white text-2xl"><FaCrown /></p>
                    }
                </div>
            </div>
        </div>
    );
};

export default ArticlesDetails;