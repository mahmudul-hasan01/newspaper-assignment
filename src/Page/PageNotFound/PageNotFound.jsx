import { Link } from 'react-router-dom';
import logo from '../../assets/logo/404-landing-page-free-vector.jpg'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa6';

const PageNotFound = () => {
    return (
        <div className='relative'>
            <img className='w-full h-full' src={logo} alt="" />
            <Link className='absolute top-0 flex items-center gap-2 lg:top-[20%] left-[38%] md:left-[42%] lg:left-[45%] bg-blue-600 py-2 2 px-5 rounded-lg text-white text-xl' to="/"><FaArrowRight /> Home
            <FaArrowLeft />
            </Link>
        </div>
    );
};

export default PageNotFound;