import './sidebar.css'
import { SidebarData } from './SidebarData';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                {SidebarData.map((val, key) => {
                    return (
                        <>
                            <h3 key={key} className="sidebarTitle">{val.title}</h3>
                            <ul className="sidebarList">
                                {val.items.map((v,k) => {
                                        return (
                                        <li key={k} 
                                        onClick={(() => window.location.pathname = v.link)}
                                        className={
                                            window.location.pathname === v.link 
                                            ? "sidebarListItem active" : "sidebarListItem"}>
                                            {v.icon}
                                            {v.name}
                                        </li>)
                                })}
                            </ul>
                        </>
                        );
                })}
            </div>
        </div>
    </div>
  )
}
