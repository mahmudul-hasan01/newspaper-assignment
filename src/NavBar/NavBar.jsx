import { Link, NavLink } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";
import useAuth from "../Hook/AuthHook/useAuth";
import { useState } from "react";
import logo from '../assets/images.png'

const NavBar = () => {
    const { user, logOut } = useAuth()
    const [open, setOpen] = useState(false)
    const navLink = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-600" : ""
            }
        >
           Home
        </NavLink>
        <NavLink
            to="/addArticles"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-600" : ""
            }
        >
           Add Articles
        </NavLink>
        <NavLink
            to="/allArticles"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-600" : ""
            }
        >
          All Articles
        </NavLink>
        <NavLink
            to="/subscription"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-600" : ""
            }
        >
          Subscription
        </NavLink>
        <NavLink
            to="/myArticles"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-600" : ""
            }
        >
          My Articles
        </NavLink>
        <NavLink
            to="/premiumArticles"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-600" : ""
            }
        >
          Premium Articles
        </NavLink>
        <NavLink
            to="/userPhoto"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-600" : ""
            }
        >
          My Profile
        </NavLink>
        <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-red-600" : ""
            }
        >
          Dashboard
        </NavLink>

    </>
    const hendleLogout = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="flex justify-between items-center h-24">

            <div>
                <img className="w-40 h-28" src={logo} alt="" />
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

            </div>
        </div>
    );
};

export default NavBar;