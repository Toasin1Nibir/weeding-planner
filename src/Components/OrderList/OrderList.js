import React, { useEffect, useState } from 'react';
import OrderListData from '../OrderListData/OrderListData';
import './OrderList.css'
import {
   Link 
  } from "react-router-dom";
const OrderList = () => {
    const [product , setProduct] = useState([])
    useEffect(()=>{
        fetch('https://fast-hollows-52421.herokuapp.com/booking')
        .then(res => res.json())
      
        .then(data => setProduct(data))
    },[])
    return (
        <div className='row'>    
           <div class="sidenav col-md-2">
                    <Link to ="/orderlist">OrderList</Link> <br/>
                    <Link to="/addservice">Add service</Link> <br/>
                    <Link to="/manageorder">Manageorder</Link> <br/>
                   
                </div>
               <div class="col-md-9">
              {
                  product.map(order=><OrderListData order={order}></OrderListData>)
              }

               </div>
          
        </div>
    );
};

export default OrderList;