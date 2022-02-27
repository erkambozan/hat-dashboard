import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import SignOut from "views/Pages/SignOut.js";

import {
    DocumentIcon,
    RocketIcon,
} from "components/Icons/Icons";

var dashRoutes = [
    {
        name: "ACCOUNT PAGES",
        category: "account",
        rtlName: "صفحات",
        state: "pageCollapse",
        views: [
            {
                path: "/signin",
                name: "Sign In",
                rtlName: "لوحة القيادة",
                icon: <DocumentIcon color="inherit" />,
                component: SignIn,
                layout: "/auth",
                hide: true
            },
            {
                path: "/signup",
                name: "Sign Up",
                rtlName: "لوحة القيادة",
                icon: <RocketIcon color="inherit" />,
                secondaryNavbar: true,
                component: SignUp,
                layout: "/auth",
                hide: true
            },
            {
                path: "/signout",
                name: "Logout",
                rtlName: "لوحة القيادة",
                icon: <RocketIcon color="inherit" />,
                component: SignOut,
                layout: "/auth",
            },
        ],
    },
];
export default dashRoutes;