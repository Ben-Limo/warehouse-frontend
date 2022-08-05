import React from 'react'

import {
    DashboardOutlined,
    NotificationsNoneOutlined,
    AccountCircleOutlined,
    LogoutOutlined,
    Timeline, 
    TrendingUp, 
    PersonOutline, 
    ShopOutlined, 
    ReceiptOutlined, 
    CategoryOutlined, 
    ShoppingCartOutlined, 
    InsertChartOutlined, 
    SettingsOutlined} from '@mui/icons-material';

export const SidebarData = [
    {
        title: "Home",
        items: [
            {
                name: "Dashboard",
                icon: <DashboardOutlined  className="sidebar-icon"/>,
                link: "/home"
            },
            {
                name: "Analytics",
                icon: <Timeline  className="sidebar-icon"/>,
                link: "/analytics"
            },
            {
                name: "Sales",
                icon: <TrendingUp  className="sidebar-icon"/>,
                link: "/sales"
            }
        ]
    },
    {
        title: "Quick Menu",
        items: [
            {
                name: "Users",
                icon: <PersonOutline  className="sidebar-icon"/>,
                link: "/users"
            },
            {
                name: "Products",
                icon: <ShopOutlined  className="sidebar-icon"/>,
                link: "/products"
            },
            {
                name: "Categories",
                icon: <CategoryOutlined  className="sidebar-icon"/>,
                link: "/categories"
            },
            {
                name: "Materials",
                icon: <ShoppingCartOutlined  className="sidebar-icon"/>,
                link: "/materials"
            },
            {
                name: "Transactions",
                icon: <ReceiptOutlined  className="sidebar-icon"/>,
                link: "/transactions"
            },
            {
                name: "Reports",
                icon: <InsertChartOutlined  className="sidebar-icon"/>,
                link: "/reports"
            }
        ]
    },
    {
        title: "Account",
        items: [
            {
                name: "Notifications",
                icon: <NotificationsNoneOutlined  className="sidebar-icon"/>,
                link: "/messages"
            },
            {
                name: "Settings",
                icon: <SettingsOutlined className="sidebar-icon"/>,
                link: "/messages"
            }
        ]
    },
    {
        title: "User",
        items: [
            {
                name: "Profile",
                icon: <AccountCircleOutlined  className="sidebar-icon"/>,
                link: "/profile"
            },
            {
                name: "Logout",
                icon: <LogoutOutlined  className="sidebar-icon"/>,
                link: "/logout"
            }
        ]
    }
]
