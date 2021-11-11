import Homepage from "../Pages/Homepage"
import Userpage from "../Pages/Userpage"
import Postpage from "../Pages/Postpage"
import Commentpage from "../Pages/Commentpage"

//user/*
export const MAIN_ROUTER = [
    {
        id:1,
        routerNmae:"Home",
        routerPath:"/user/home",
        routerComponent:<Homepage/>,
    },
    {
        id:2,
        routerNmae:"User list",
        routerPath:"/user/user-list",
        routerComponent:<Userpage/>,
    },
    {
        id:3,
        routerNmae:"Post list",
        routerPath:"/user/post-list",
        routerComponent:<Postpage/>,
    },
    {
        id:4,
        routerNmae:"Comment list",
        routerPath:"/user/comment-list",
        routerComponent:<Commentpage/>,
    }
]

//LOGIN,USER,PDPA
export const AUTH_ROUTER = []