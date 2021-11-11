import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import {MAIN_ROUTER} from '../Models/RouterModel'

const Routerindex = () => {
    const [mainRouter,setMainRouter] = useState(MAIN_ROUTER)
    return (
        <>
           <Routes>
               <Route path="user">{mainRouter.length !== 0 ? <>
               {mainRouter.map((res,i)=>{
                   return <Route key={i} path={res.routerPath} element={res.routerComponent}/>
               
                })}
               
               </> : <></>}</Route>
               
            </Routes> 
        </>
    )
}

export default Routerindex
