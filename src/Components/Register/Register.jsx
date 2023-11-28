import image from '../../assets/logo/registration.jpg'
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
import { imageUplode } from '../../Hook/Image/ImageHost';
import useAuth from '../../Hook/AuthHook/useAuth';
import axios from 'axios';
import { saveUser } from '../../Hook/UserData/userData';

const Register = () => {
    const { register, googleLogin, updateUserProfile, user } = useAuth()
    // const userName =user?.displayName
    // const userEmail =user?.email
    // const photoURL =user?.photoURL
    // const status = 'pending'
    // console.log({name,email,photoURL,status})

    const currentUser ={
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL,
        role: 'user'
    }
    const email =user?.email

    const handleRegister = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photo = form.photo.files[0]
        try {
            const formData = new FormData()
            formData.append('image', photo)
            const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KYE}`, formData)

            const result = await register(email, password)
            await updateUserProfile(name, data?.data?.display_url)
            // const  datas  = await axios.put(`http://localhost:5000/user/${user?.email}`, currentUser)
            // console.log(datas?.data)
            const info =await saveUser(result?.user)
            console.log(info)


        }
        catch (err) {
            console.log(err)
        }

        // .then(data => {
        //     return Swal.fire(
        //         'Good!',
        //         'Successfully Register.',
        //         'success'
        //     )
        // })
        // .catch(error => console.log(error))
    }
    // const hendleGoogleLogin = () => {
    //     googleLogin()
    //         .then()
    //         .catch()
    // }


    return (

        <div>
            <div className='flex justify-center items-center w-full ' >
                <div className='w-[400px] rounded-md'>
                    <div className='border-b-2 border-black mx-8'>
                        <h1 className='text-center py-3 text-4xl'>Register</h1>
                    </div>
                    <form onSubmit={handleRegister} className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="text" name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" />
                        </div>

                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required />
                        </div>

                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Password" required />
                        </div>

                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Photo</label>
                            <input type="file" name='photo' id="Photo" placeholder="Enter Your Photo" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="py-2 px-5 rounded-lg text-white bg-yellow-500">Register</button>
                        </div>
                    </form>
                    {/* <button className=" border-2 w-3/5  text-xl " onClick={hendleGoogleLogin}><FcGoogle></FcGoogle> Google</button> */}

                </div>
                <div>
                    <img className='w-[420px] h-[400px]' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;