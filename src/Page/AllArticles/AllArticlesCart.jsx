
const AllArticlesCart = ({item}) => {
    const { _id, title, image, publisher, description, tags, name, photo, email, status, premium, date } = item
    return (
        <div>
            <div className="flex flex-col h-[300px] items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-[220px]  rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
            </div>

        </div>
    );
};

export default AllArticlesCart;