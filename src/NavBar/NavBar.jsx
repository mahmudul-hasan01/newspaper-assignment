import { Link, NavLink } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";
import useAuth from "../Hook/AuthHook/useAuth";
import { useState } from "react";

const NavBar = () => {
    const { user, logOut } = useAuth()
    const [open, setOpen] = useState(false)
    const navLink = <>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/addArticles'>Add Articles</NavLink>
        <NavLink to='/allArticles'>All Articles</NavLink>
        <NavLink to='/subscription'>Subscription</NavLink>
        <NavLink to='/myArticles'>My Articles</NavLink>
        <NavLink to='/premiumArticles'>Premium Articles</NavLink>
        <NavLink to='/userPhoto'>User Photo</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
    </>
    const hendleLogout = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="flex justify-between items-center h-24">
            {/* <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>

                    {
                        user?.email &&
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button onClick={() => setOpen(!open)} type="button" className="flex relative text-sm items-center gap-3 border-2 px-2 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <AiOutlineAlignRight className="text-2xl" />
                                <img className="w-10 h-10 rounded-full" src={logo} alt="user photo" />
                            </button>

                            <div className={`z-50 lg:hidden absolute my-4 w-[100%] text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${open ? "top-20 md:top-36" : "-top-96"}`} id="user-dropdown">
                                <ul className="w-full flex flex-col" aria-labelledby="user-menu-button">
                                    {navLink}
                                </ul>
                            </div>
                        </div>

                    }


                    <div className="flex flex-row-reverse gap-20">
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                {navLink}
                            </ul>
                        </div>
                        {
                            user?.email ?  '' : <Link className="text-xl py-2 px-4 border-2 rounded-lg border-black" to='/login'>Login</Link>
                        }
                    </div>
                </div>
            </nav> */}

            <div>
                <img className="w-20 h-14" src={user?.photoURL} alt="" />
            </div>
            <div className="xl:flex gap-5 hidden xl:visible text-xl">
                {navLink}
            </div>

            <div>

                {
                    user?.email ?
                        <div onClick={() => setOpen(!open)} className="flex relative border-2 px-3 py-2 items-center gap-4 rounded-xl">
                            <AiOutlineAlignRight className="w-7 h-7" />
                            <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                            <div className={`absolute border-2 z-50 ${open ? "top-20 right-1 md:top-20" : "-top-[600px]"}`}>
                                <div className="flex xl:hidden flex-col gap-2 ">
                                    {navLink}
                                </div>
                                <Link to='/register' className='text-xl z-40  border-2 rounded-lg border-black'>Register</Link>
                                <button onClick={hendleLogout} className='text-xl py-2 px-4 border-2 rounded-lg border-black'>LogOut</button>
                            </div>
                        </div>
                        :
                        <Link className="text-xl py-2 px-4 border-2 rounded-lg border-black" to='/login'>Login</Link>
                }

            </div>
        </div>
    );
};

export default NavBar;