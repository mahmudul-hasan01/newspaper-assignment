import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex ">
            <div className="w-[200px] h-[100vh] bg-slate-300 flex flex-col p-5 space-y-5 text-center">

                <NavLink className='px-3 py-2 bg-orange-400 rounded-md' to='/dashboard/allUser'>All User</NavLink>

                <NavLink className='px-3 py-2 bg-orange-400 rounded-md' to='/dashboard/allArticle'>All Articles</NavLink>

                <NavLink className='px-3 py-2 bg-orange-400 rounded-md' to='/dashboard/addPublisher'>Add Publisher</NavLink>

                <NavLink className='px-3 py-2 bg-orange-400 rounded-md' to='/'>Home</NavLink>

            </div>
            <div className="h-[100vh] w-screen ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;