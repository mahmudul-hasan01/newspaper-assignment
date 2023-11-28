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
        <NavLink to='/userPhoto'>My Profile</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
    </>
    const hendleLogout = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="flex justify-between items-center h-24">

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
                                {/* <div className="">
                                    
                                </div> */}

                                <div id="dropdownInformation" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                        <div>{user?.displayName}</div>
                                        <div className="font-medium truncate">{user?.email}</div>
                                    </div>
                                    <ul className="py-2 text-sm xl:hidden text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                                        <li className="flex flex-col gap-2 px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        {navLink}
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                     <Link to='/register' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Register</Link>
                                    </div>
                                    <div className="py-2" onClick={hendleLogout}>
                                        <a href="#" className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        :
                        <Link className="text-xl py-2 px-4 border-2 rounded-lg border-black" to='/login'>Login</Link>
                }



                {/* <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown header <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" d="m1 1 4 4 4-4" />
                </svg>
                </button> */}







            </div>
        </div>
    );
};

export default NavBar;