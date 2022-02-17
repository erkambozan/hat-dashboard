// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import SignOut from "views/Pages/SignOut.js";
import Stake from "views/Dashboard/Stake/Stake";
import Buy from "views/Dashboard/Buy";
import UserWithdrawal from "views/Dashboard/UserWithdrawal";

import {
    HomeIcon,
    StatsIcon,
    CreditIcon,
    PersonIcon,
    DocumentIcon,
    RocketIcon,
} from "components/Icons/Icons";

var dashRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        rtlName: "لوحة القيادة",
        icon: <HomeIcon color="inherit" />,
        component: Dashboard,
        layout: "/user",
    },
    {
        path: "/balance",
        name: "Balance",
        rtlName: "لوحة القيادة",
        icon: <HomeIcon color="inherit" />,
        component: Buy,
        layout: "/user",
    },
    {
        path: "/tables",
        name: "Tables",
        rtlName: "لوحة القيادة",
        icon: <StatsIcon color="inherit" />,
        component: Tables,
        layout: "/user",
    },
    /*{
        path: "/billing",
        name: "Billing",
        rtlName: "لوحة القيادة",
        icon: <CreditIcon color="inherit" />,
        component: Billing,
        layout: "/user",
    },*/
    {
        path: "/stake",
        name: "Stake",
        rtlName: "لوحة القيادة",
        icon: <CreditIcon color="inherit" />,
        component: Stake,
        layout: "/user",
    },
    {
        path: "/withdraw",
        name: "Withdraw",
        rtlName: "لوحة القيادة",
        icon: <CreditIcon color="inherit" />,
        component: UserWithdrawal,
        layout: "/user",
    },

    // {
    //   path: "/rtl-support-page",
    //   name: "RTL",
    //   rtlName: "آرتيإل",
    //   icon: <SupportIcon color="inherit" />,
    //   component: RTLPage,
    //   layout: "/rtl",
    // },
    {
        name: "ACCOUNT PAGES",
        category: "account",
        rtlName: "صفحات",
        state: "pageCollapse",
        views: [
            {
                path: "/profile",
                name: "Profile",
                rtlName: "لوحة القيادة",
                icon: <PersonIcon color="inherit" />,
                secondaryNavbar: true,
                component: Billing,
                layout: "/user",
            },
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