import React, { useEffect, useState } from 'react';
import ManageData from '../ManageData/ManageData';

const Manageorder = () => {
    const [product , setProduct] = useState([])
    useEffect(()=>{
        fetch('https://fast-hollows-52421.herokuapp.com/service')
        .then(res => res.json())
      
        .then(data => setProduct(data))
    },[])
    return (
        <div>
             {
             product.map(pd =><ManageData pd={pd}></ManageData>)
            }
        </div>
    );
};

export default Manageorder;