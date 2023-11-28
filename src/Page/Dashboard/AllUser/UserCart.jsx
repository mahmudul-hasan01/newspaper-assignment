import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
// import Modal from "./Modal";
import { useState } from "react";

const UserCart = ({ info,refetch }) => {
    console.log(Object.keys(info).join(','))

    const { _id,email,image,name,role} = info
    const [decline, setDecline] = useState(null)

    const hendleApproved = () => {
        const status = 'Approved'
        const data = { status }
        axios.patch(`http://localhost:5000/addArticle/${_id}`, data)
            .then(data => console.log(data?.data))
        refetch()
    }

    const hendlePremium = (e) => {
        e.preventDefault()
        const premium = 'yes'
        const data = { premium }
        console.log(data)
        axios.patch(`http://localhost:5000/premium/${_id}`,data )
            .then(data => console.log(data?.data))
            refetch()
    }


    const hendleDelete = (id) => {
        axios.delete(`http://localhost:5000/addArticles/${id}`)
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
            {/* <td className="px-2 py-4">
                {date}
            </td> */}
            <td className="px-2 py-4">
                {role}
            </td>
            {/* <td className="px-2 py-4">
                <button onClick={hendleApproved}>Approved</button>
            </td> */}
            {/* <td className="px-2 py-4">
                <Modal _id={_id} refetch={refetch}></Modal>
            </td> */}
            {/* <td className="px-2 py-4">
                <PremiumModal _id={_id} refetch={refetch}></PremiumModal>
                <button onClick={hendlePremium}>Premium</button>
            </td> */}
            <td className="px-2 py-4">
                <button onClick={() => hendleDelete(_id)}><MdDeleteForever className='text-3xl' /></button>
            </td>
        </tr>
    </tbody>
    );
};

export default UserCart;