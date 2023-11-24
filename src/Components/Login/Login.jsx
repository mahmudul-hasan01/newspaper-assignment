import { Link, Navigate } from 'react-router-dom';
import image from '../../assets/logo/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';

const Login = () => {

    const { login,googleLogin } = useContext(AuthContext)

    const hendleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        login(email, password)
            .then(() => {
                return Swal.fire(
                    'Good!',
                    'Successfully Login.',
                    'success'
                  )
                //  <Navigate to='/'></Navigate>
            })
            .catch(error => console.log(error))
    }
    // const hendleGoogleLogin =()=>{
    //     googleLogin()
    //     .then()
    //     .catch()
    // }

    return (
        // style={{backgroundImage:`url("${image}")`}} className='w-full max-h-screen'

        <div>
            <div className='flex justify-center items-center w-full mt-20' >
                <div className='w-[400px] bg-slate-100 rounded-md'>
                    <div className='border-b-2 border-black mx-8'>
                        <h1 className='text-center py-3 text-4xl'>Login</h1>
                    </div>
                    <form onSubmit={hendleLogin} className="max-w-sm mx-auto">

                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required />
                        </div>

                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Password" required />
                        </div>
                        <span><Link to='/register'>Register</Link></span>

                        <div className="form-control mt-6">
                            <button className="py-2 px-5 rounded-lg text-white bg-yellow-500">Register</button>
                        </div>
                    </form>
                </div>
                <div>
                    <img className='w-[400px] h-[400px]' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;