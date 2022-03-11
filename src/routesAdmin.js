// import
import Dashboard from "views/Dashboard/Dashboard.js";
import StakeUserTable from "views/Dashboard/StakeUserTable.js";
import EarnUserTable from "views/Dashboard/EarnUserTable.js";
import Billing from "views/Dashboard/Billing.js";
import Profile from "views/Dashboard/Profile.js";
import SignOut from "views/Pages/SignOut.js";
import Stake from "views/Dashboard/Stake";
import Buy from "views/Dashboard/Buy";
import AdminStake from "views/Dashboard/AdminStake.js";
import AdminStakeSettings from "views/Dashboard/AdminStakeSettings.js";
import AdminWithdrawal from "views/Dashboard/AdminWithdrawal.js";

import {
    HomeIcon,
    StatsIcon,
    CreditIcon,
    PersonIcon,
    RocketIcon,
} from "components/Icons/Icons";
import {SlackLogo} from "./components/Icons/Icons";
import UserWithdrawal from "./views/Dashboard/UserWithdrawal";
import AdminEarnTable from "./views/Dashboard/AdminEarnTable";
import AdminUsers from "./views/Dashboard/AdminUsersTable";
import UserWithdrawalTable from "./views/Dashboard/UserWithdrawal";

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
        path: "/buy",
        name: "Buy",
        rtlName: "لوحة القيادة",
        icon: <CreditIcon color="inherit" />,
        component: Buy,
        layout: "/user",
    },
    {
        path: "/stake-tables",
        name: "Stake Tables",
        rtlName: "لوحة القيادة",
        icon: <StatsIcon color="inherit" />,
        component: StakeUserTable,
        layout: "/user",
    },
    {
        path: "/earns",
        name: "Earns",
        rtlName: "لوحة القيادة",
        icon: <StatsIcon color="inherit" />,
        component: EarnUserTable,
        layout: "/user",
    },
   /* {
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
        component: UserWithdrawalTable,
        layout: "/user",
    },
            {
                path: "/admin-all-stake",
                name: "Admin All Stake",
                rtlName: "لوحة القيادة",
                icon: <SlackLogo color="inherit" />,
                component: AdminStake,
                layout: "/user",
            },
            {
                path: "/admin-stake-settings",
                name: "Admin Stake Settings",
                rtlName: "لوحة القيادة",
                icon: <SlackLogo color="inherit" />,
                component: AdminStakeSettings,
                layout: "/user",
            },

    {
        path: "/admin-all-withdraws",
        name: "Admin All Withdraws",
        rtlName: "لوحة القيادة",
        icon: <SlackLogo color="inherit" />,
        component: AdminWithdrawal,
        layout: "/user",
    },
    {
        path: "/admin-earn-table",
        name: "Admin Earn Table",
        rtlName: "لوحة القيادة",
        icon: <SlackLogo color="inherit" />,
        component: AdminEarnTable,
        layout: "/user",
    },
    {
        path: "/admin-user-table",
        name: "Admin User Table",
        rtlName: "لوحة القيادة",
        icon: <SlackLogo color="inherit" />,
        component: AdminUsers,
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
