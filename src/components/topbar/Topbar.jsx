import React from 'react'

import './topbar.scss'

import {NotificationsNoneOutlined, 
        LanguageOutlined, 
        SearchOutlined,
        DarkModeOutlined,
        FullscreenExitOutlined,
        ChatBubbleOutlineOutlined,
        ListOutlined} from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbar-wrapper'>
            <div className='topbar-search'>
                <input type="text" placeholder="Search..." />
                <SearchOutlined />
            </div>
            <div className='topbar-items'>
                <div className="topbar-items__item">
                    <LanguageOutlined className='topbar-icon'/>
                    <span>English</span>
                </div>
                <div className="topbar-items__item">
                    <DarkModeOutlined className='topbar-icon'/>
                </div>
                <div className="topbar-items__item">
                    <FullscreenExitOutlined className='topbar-icon'/>
                </div>
                <div className="topbar-items__item">
                    <NotificationsNoneOutlined className='topbar-icon'/>
                    <div className="counter">2</div>
                </div>
                <div className="topbar-items__item">
                    <ChatBubbleOutlineOutlined className='topbar-icon'/>
                    <div className="counter">1</div>
                </div>
                <div className="topbar-items__item">
                    <ListOutlined className='topbar-icon'/>
                </div>
                <div className="topbar-items__item">
                    <img 
                        src='https://robohash.org/laborenihilaut.png?size=50x50&set=set1'
                        alt='BL'
                        className='topbar-avatar'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar