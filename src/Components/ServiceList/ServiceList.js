import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import ServiceListData from '../ServiceListData/ServiceListData';

const ServiceList = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const [service ,setService] = useState([])
      
  useEffect(()=>{
    fetch('https://fast-hollows-52421.herokuapp.com/booking')
    .then(res => res.json())
    .then(data => setService(data))
} ,[])
    return (
        <div className='row'>

            <div class="sidenav col-md-2">
                <Link to="#">Book</Link><br />
                <Link to="/serviceList">Booklist</Link> <br />
                <Link to="/review">Review</Link> <br />

            </div>
            <div className='col-md-8'>
                {
                    service.map(servicelist => <ServiceListData servicelist={servicelist}></ServiceListData>)
                }
            </div>
        </div>
    );
};

export default ServiceList;