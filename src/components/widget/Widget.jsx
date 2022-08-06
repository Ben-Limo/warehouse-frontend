import './widget.scss'

import {KeyboardArrowUp, 
        ReceiptOutlined, 
        PaidOutlined, 
        ShopOutlined, 
        GroupOutlined} from '@mui/icons-material'

const Widget = ({type, amount}) => {
    let data;

    // const amount = 2121
    const diff = 30

    switch (type) {
        case 'transaction':
            data = {
                title: "Transactions",
                isMoney: false,
                link: "view all transactions",
                icon: <ReceiptOutlined className='widget-icon'
                style={{
                    color: "goldenrod",
                    backgroundColor:"rgba(218,165,32,0.2)",
                }} />
            }; 
            break;
        case 'sale':
            data = {
                title: "Sales",
                isMoney: true,
                link: "view all sales",
                icon: <PaidOutlined className='widget-icon' 
                style={{
                    color: "green",
                    backgroundColor:"rgba(0,128,0,0.2)",
                }} />
            }; 
            break;
        case 'product':
            data = {
                title: "Products",
                isMoney: false,
                link: "view all products",
                icon: <ShopOutlined className='widget-icon' 
                style={{
                    color: "purple",
                    backgroundColor:"rgba(128,0,128,0.2)",
                }}/>
            }; 
            break;
        case 'customer':
            data = {
                title: "Customers",
                isMoney: false,
                link: "see all customers",
                icon: <GroupOutlined className='widget-icon' 
                style={{
                    color: "crimson",
                    backgroundColor:"rgba(255,0,0,0.2)",
                }}/>
            }; 
            break;
    
        default:
            break;
    }

  return (
    <div className='widget'>
        <div className="widget-left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "ksh"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="widget-right">
            <div className="percentage positive">
                <KeyboardArrowUp />
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget