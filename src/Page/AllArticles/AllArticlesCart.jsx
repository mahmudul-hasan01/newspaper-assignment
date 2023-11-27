import { FaCrown } from "react-icons/fa6";

const AllArticlesCart = ({item}) => {
    const { _id, title, image, publisher, description, tags, name, photo, email, status, premium, date } = item
    return (
        <div>
            <div className="flex flex-col h-[300px] relative items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-[220px]  rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{premium}</p>
                    </div>
                    {
                        premium === 'yes' && <p className="absolute top-5 left-5 px-4 py-2 rounded-lg bg-black text-white text-2xl"><FaCrown /></p>
                    }
            </div>

        </div>
    );
};

export default AllArticlesCart;