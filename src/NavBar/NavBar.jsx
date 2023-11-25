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