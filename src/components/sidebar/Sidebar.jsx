import './sidebar.css'

import {
    LineStyle, 
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

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <PersonOutline className="sidebarIcon"/>
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <Inventory2Outlined className="sidebarIcon"/>
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <CategoryOutlined className="sidebarIcon"/>
                        Categories
                    </li>
                    <li className="sidebarListItem">
                        <ShoppingCartOutlined className="sidebarIcon"/>
                        Materials
                    </li>
                    <li className="sidebarListItem">
                        <PaidOutlined className="sidebarIcon"/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <InsertChartOutlined className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MessageOutlined className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <ManageAccountsOutlined className="sidebarIcon"/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
