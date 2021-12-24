// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import SignOut from "views/Pages/SignOut.js";
import Stake from "views/Dashboard/Stake/Stake";
import AdminStake from "views/Dashboard/AdminStake.js";
import AdminStakeSettings from "views/Dashboard/AdminStakeSettings.js";

import {
    HomeIcon,
    StatsIcon,
    CreditIcon,
    PersonIcon,
    DocumentIcon,
    RocketIcon,
} from "components/Icons/Icons";
import React, {useEffect, useState} from "react";
import {MANAGE, Perm} from "./api/perm";


var tempRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        rtlName: "لوحة القيادة",
        icon: <HomeIcon color="inherit"/>,
        component: Dashboard,
        layout: "/user",
    },
    {
        path: "/tables",
        name: "Tables",
        rtlName: "لوحة القيادة",
        icon: <StatsIcon color="inherit"/>,
        component: Tables,
        layout: "/user",
    },
    {
        path: "/billing",
        name: "Billing",
        rtlName: "لوحة القيادة",
        icon: <CreditIcon color="inherit"/>,
        component: Billing,
        layout: "/user",
    },
    {
        path: "/stake",
        name: "Stake",
        rtlName: "لوحة القيادة",
        icon: <CreditIcon color="inherit"/>,
        component: Stake,
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
                icon: <PersonIcon color="inherit"/>,
                secondaryNavbar: true,
                component: Profile,
                layout: "/user",
            },
            {
                path: "/signin",
                name: "Sign In",
                rtlName: "لوحة القيادة",
                icon: <DocumentIcon color="inherit"/>,
                component: SignIn,
                layout: "/auth",
                hide: true
            },
            {
                path: "/signup",
                name: "Sign Up",
                rtlName: "لوحة القيادة",
                icon: <RocketIcon color="inherit"/>,
                secondaryNavbar: true,
                component: SignUp,
                layout: "/auth",
                hide: true
            },
            {
                path: "/signout",
                name: "Logout",
                rtlName: "لوحة القيادة",
                icon: <RocketIcon color="inherit"/>,
                component: SignOut,
                layout: "/auth",
            },
        ],
    },
];

var manageRoutes = [
    {
        path: "/admin/stake",
        name: "Admin Stake",
        rtlName: "admin",
        icon: <CreditIcon color="inherit"/>,
        component: AdminStake,
        layout: "/user",
    },
    {
        path: "/admin/stake-settings",
        name: "Admin Stake Settings",
        rtlName: "admin",
        icon: <CreditIcon color="inherit"/>,
        component: AdminStakeSettings,
        layout: "/user",
    },
]

export default function getTempRoutes () {
    let tempR = [];
    const [manage, setManage] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            Perm.userInfo().then(res =>
                Perm.setPerm(res.id, MANAGE, setManage),
            )
        }, 1);
    }, []);

    if (manage) {
        tempR.push.apply(tempR, manageRoutes)
        tempR.push.apply(tempR, tempRoutes)
        return tempR
    }
    tempR.push.apply(tempR, tempRoutes)
    return tempR
}