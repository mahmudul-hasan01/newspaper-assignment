import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import Modal from "./Modal";
import { useState } from "react";
import PremiumModal from "./PremiumModal";

const ArticleInfo = ({ info, refetch }) => {
    const { _id, title, image, publisher, description, tags, name, photo, email, status, premium, date } = info
    const [decline, setDecline] = useState(null)

    const hendleApproved = () => {
        const status = 'Approved'
        const data = { status }
        axios.patch(`https://server-smoky-theta.vercel.app/addArticle/${_id}`, data)
            .then(data => console.log(data?.data))
        refetch()
    }

    const hendlePremium = (e) => {
        e.preventDefault()
        const premium = 'yes'
        const data = { premium }
        console.log(data)
        axios.patch(`https://server-smoky-theta.vercel.app/premium/${_id}`,data )
            .then(data => console.log(data?.data))
            refetch()
    }


    const hendleDelete = (id) => {
        axios.delete(`https://server-smoky-theta.vercel.app/addArticles/${id}`)
            .then(data => console.log(data?.data))
        refetch()
    }

    return (
        <tbody>

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-2 py-4">
                    <img className="w-14 h-14 rounded-full" src={photo} alt="" />
                </td>
                <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {name}
                </th>
                <td className="px-2 py-4">
                    {email}
                </td>
                <td className="px-2 py-4">
                    {date}
                </td>
                <td className="px-2 py-4">
                    {status}
                </td>
                <td className="px-2 py-4">
                    {publisher}
                </td>
                <td className="px-2 py-4">
                    <button className="px-5 py-2.5 text-white font-semibold bg-blue-600 rounded-xl" onClick={hendleApproved}>Approved</button>
                </td>
                <td className="px-2 py-4">
                    <Modal _id={_id} refetch={refetch}></Modal>
                </td>
                <td className="px-2 py-4">
                    <button className="px-5 py-2.5 text-white font-semibold bg-blue-600 rounded-xl" onClick={hendlePremium}>Premium</button>
                </td>
                <td className="px-2 py-4">
                    <button onClick={() => hendleDelete(_id)}><MdDeleteForever className='text-3xl' /></button>
                </td>
                <td className="px-2 py-4">
                {title}
                </td>
            </tr>
        </tbody>
    );
};

export default ArticleInfo;