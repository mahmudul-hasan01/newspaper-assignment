import axios from "axios";
import { MdDeleteForever } from "react-icons/md";

const ArticleInfo = ({info}) => {
    const {_id,title,image,publisher,description,tags,name,photo,email,status,premium,date}=info

    const hendleApproved =()=>{
        const status = 'Approved'
        console.log(status)
        axios.patch(`http://localhost:5000/addArticle/${_id}`,status)
        .then(data => console.log(data?.data))
    }
    // const hendleSubmit = (e) => {
    //     e.preventDefault()
    //     const form = e.target
    //     const option =form.options.value
    //     const options ={option}
        
    // }

    const hendleDelete=(id)=>{
        axios.delete(`http://localhost:5000/addArticles/${id}`)
        .then(data => console.log(data?.data))
    }
    
    return (
        <tbody>

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {title}
                </th>
                <td className="px-2 py-4">
                    {name}
                </td>
                <td className="px-2 py-4">
                    {email}
                </td>
                <td className="px-2 py-4">
                    <img className="w-14 h-14 rounded-full" src={photo} alt="" />
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
                    <button onClick={hendleApproved}>Approved</button>
                </td>
                <td className="px-2 py-4">
                    <button>dicline</button>
                </td>
                <td className="px-2 py-4">
                    <button>make premium</button>
                </td>
                <td className="px-2 py-4">
                    <button onClick={()=>hendleDelete(_id)}><MdDeleteForever className='text-3xl' /></button>
                </td>
            </tr>
        </tbody>
    );
};

export default ArticleInfo;