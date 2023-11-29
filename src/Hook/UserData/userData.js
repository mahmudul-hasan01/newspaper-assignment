import axios from "axios"

export const saveUser =async user=>{
    const currentUser ={
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL,
        role: 'user'
    }
    const {data}=await axios.put(`https://server-smoky-theta.vercel.app/user/${user?.email}`,currentUser)
    return data
}
