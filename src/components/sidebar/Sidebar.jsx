import './sidebar.scss'
import { SidebarData } from './SidebarData';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-top">
            <span className='sidebar-logo'>Teckmils</span>
        </div>
        <hr />
        <div className="sidebar-center">
            {SidebarData.map((val, key) => {
                return (
                    <>
                        <p key={key} className="sidebar-title">{val.title}</p>
                        <ul className="sidebar-list">
                            {val.items.map((v,k) => {
                                    return (
                                    <li key={k} 
                                    onClick={(() => window.location.pathname = v.link)}
                                    className={
                                        window.location.pathname === v.link 
                                        ? "sidebar-list__item active" : "sidebar-list__item"}>
                                        {v.icon}
                                        <span>{v.name}</span>
                                    </li>)
                            })}
                        </ul>
                    </>
                    );
            })}
        </div>
        <div className='sidebar-bottom'>
            <div className='color_option'></div>
            <div className='color_option'></div>
        </div>
        
    </div>
  )
}

export default Sidebar
