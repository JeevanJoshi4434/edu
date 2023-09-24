import * as Icon from 'react-feather';


/* The `const HorizontalConfig` is an object that contains configuration settings for a horizontal
navigation menu. It has the following properties: */
const HorizontalConfig = {
        title:"Under-Docs",
        centerItems:[
            {
                title:"Home",
                icon:Icon.Home,
                link:"/home",
                id:"home"
            },
            {
                title:"Courses",
                icon:Icon.Book,
                link:"/courses",
                id:"courses"
            },
            {
                title:"Career",
                icon:Icon.Book,
                link:"/career",
                id:"career"
            },
            {
                title:"Community",
                icon:Icon.Users,
                link:"/community",
                id:"community"
            }
        ],
        rightItems:[
            {
                title:"Get Started",
                link:"/register",
                id:"register"
            },
        ],
}

/* The `VerticalConfig` constant is an object that contains configuration settings for a vertical
navigation menu. */
export const VerticalConfig = [
        {
            title:"Home",
            icon:Icon.Home,
            link:"/home",
            id:"home"
        },
        {
            title:"About",
            icon:Icon.Info,
            link:"/about",
            id:"about"
        },
        {
            title:"Contact",
            icon:Icon.Phone,
            link:"/contact",
            id:"contact"
        },
        {
            title:"Login",
            icon:Icon.LogOut,
            link:"/login",
            id:"login"
        },
        {
            title:"Register",
            icon:Icon.UserPlus,
            link:"/register",
            id:"register"
        },
        {
            title:"Logout",
            icon:Icon.LogOut,
            link:"/logout",
            id:"logout"
        }
]
