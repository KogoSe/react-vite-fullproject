import React,{useState,useEffect} from 'react'
import {getUsers} from '../../Utility/User_Logic/Users'
const UserIndex = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        setData(getUsers)
    },[])
    return (
        <div>
            <ul>
                {data.length !== 0? <>
                {data.map((res,i)=>{
                    return <div key={i}>
                        <li>{res.name}</li>
                        <li>{res.username}</li>
                        <li>{res.email}</li>

                    </div>
                })}
            
            </> : <></>}
            </ul>
            
        </div>
    )
}

export default UserIndex
