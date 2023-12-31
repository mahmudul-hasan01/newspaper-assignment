import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
// import Modal from "./Modal";
// import { useState } from "react";

const UserCart = ({ info, refetch }) => {

    const { _id, email, image, name, role } = info

    const hendleApproved = () => {
        const role = 'admin'
        const data = { role }
        axios.patch(`https://server-smoky-theta.vercel.app/user/${_id}`, data)
            .then(data => console.log(data?.data))
        refetch()
    }

    const hendleDelete = (id) => {
        axios.delete(`https://server-smoky-theta.vercel.app/user/${id}`)
            .then(data => console.log(data?.data))
        refetch()
    }

    return (
        <tbody>

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-2 py-4">
                    <img className="w-14 h-14 rounded-full" src={image} alt="" />
                </td>
                <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {name}
                </th>
                <td className="px-2 py-4">
                    {email}
                </td>
                <td className="px-2 py-4">
                    {role}
                </td>
                <td className="px-2 py-4">
                    <button className="px-5 py-2.5 text-white font-semibold bg-blue-600 rounded-xl" onClick={hendleApproved}>Make Admin</button>
                </td>
                <td className="px-2 py-4">
                    <button onClick={() => hendleDelete(_id)}><MdDeleteForever className='text-3xl' /></button>
                </td>
            </tr>
        </tbody>
    );
};

export default UserCart;