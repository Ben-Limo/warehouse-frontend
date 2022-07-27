import React from 'react'

import {
    Home, 
    Timeline, 
    TrendingUp, 
    PersonOutline, 
    Inventory2Outlined, 
    PaidOutlined, 
    CategoryOutlined, 
    ShoppingCartOutlined, 
    InsertChartOutlined, 
    MessageOutlined, 
    ManageAccountsOutlined} from '@mui/icons-material';

export const SidebarData = [
    {
        title: "Dashboard",
        items: [
            {
                name: "Home",
                icon: <Home  className="sidebarIcon"/>,
                link: "/home"
            },
            {
                name: "Analytics",
                icon: <Timeline  className="sidebarIcon"/>,
                link: "/analytics"
            },
            {
                name: "Sales",
                icon: <TrendingUp  className="sidebarIcon"/>,
                link: "/sales"
            }
        ]
    },
    {
        title: "Quick Menu",
        items: [
            {
                name: "Users",
                icon: <PersonOutline  className="sidebarIcon"/>,
                link: "/users"
            },
            {
                name: "Products",
                icon: <Inventory2Outlined  className="sidebarIcon"/>,
                link: "/products"
            },
            {
                name: "Categories",
                icon: <CategoryOutlined  className="sidebarIcon"/>,
                link: "/categories"
            },
            {
                name: "Materials",
                icon: <ShoppingCartOutlined  className="sidebarIcon"/>,
                link: "/materials"
            },
            {
                name: "Transactions",
                icon: <PaidOutlined  className="sidebarIcon"/>,
                link: "/transactions"
            },
            {
                name: "Reports",
                icon: <InsertChartOutlined  className="sidebarIcon"/>,
                link: "/reports"
            }
        ]
    },
    {
        title: "Notifications",
        items: [
            {
                name: "Messages",
                icon: <MessageOutlined  className="sidebarIcon"/>,
                link: "/messages"
            }
        ]
    },
    {
        title: "Staff",
        items: [
            {
                name: "Manage",
                icon: <ManageAccountsOutlined  className="sidebarIcon"/>,
                link: "/manage"
            },
            {
                name: "Analytics",
                icon: <Timeline  className="sidebarIcon"/>,
                link: "/analytics"
            },
            {
                name: "Reports",
                icon: <InsertChartOutlined />,
                link: "/reports"
            }
        ]
    }
]
