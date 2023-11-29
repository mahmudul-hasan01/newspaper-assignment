import { NavLink } from "react-router-dom";
import logo from '../../assets/images.png'

const Footer = () => {

    const navLink = <>
        <>
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
    </>

    return (
        <div>

            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-20" alt="Flowbite Logo" />
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li className="hover:underline hidden lg:visible me-4 lg:flex gap-5 md:me-6">
                                {navLink}
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Daily News</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    );
};

export default Footer;