import React, { useEffect, useState } from 'react';

import './widgetsmall.css'

import {Visibility} from '@mui/icons-material';

export default function WidgetSmall() {
    const [products, setProducts] =useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className='widgetSmall'>
            <span className='widgetSmallTitle'>New Products</span>
            <ul className='widgetSmallList'>
                {products.map((product, index) => 
                    <li key={index} className='widgetSmallListItem'>
                        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmallImg" />
                        <div className="widgetSmallProduct">
                            <span className="widgetSmallProductName">{product.name}</span>
                            <span className="widgetSmallProductCategory">stock: {product.stock}</span>
                        </div>
                        <button className="widgetSmallButton">
                            <Visibility className="widgetSmallIcon"/> Show
                        </button>
                    </li>
                )}
                
            </ul>
        </div>
    )
}
