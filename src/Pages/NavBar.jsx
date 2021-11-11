import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import {MAIN_ROUTER} from '../Models/RouterModel'

const NavBar = () => {
    const [mainRouter,setMainRouter] = useState(MAIN_ROUTER)
    return (
        <header>
            <nav>
                <ul>
                {mainRouter.length !== 0 ? <>
               {mainRouter.map((res,i)=>{
                   return <li key={i}>
                       <NavLink to={res.routerPath}> {res.routerNmae}</NavLink>
                   </li>
               
                })}
               
               </> : <></>}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
