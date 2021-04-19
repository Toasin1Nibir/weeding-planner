import React, { useEffect, useState } from 'react';
import ServiceData from '../ServiceData/ServiceData';

const Service = () => {
    const [service , addService] = useState([])
    useEffect(()=>{
        fetch('https://fast-hollows-52421.herokuapp.com/service')
        .then(res => res.json())
        .then(data => addService(data))
    })
    return (
        <section className='services-container mt-5'>
             <div className="text-center">
                <h3 style={{color: '#E8CD62'}}>OUR SERVICES</h3>
                <h1>Services We Provide</h1>
            </div>
            <div className="d-flex justify-content-center">
            <div className='row w-75 '>
                {
                    service.map(servicedata => <ServiceData servicedata={servicedata}></ServiceData>)
                }
            </div>
            </div>
        </section>
      
    );
};

export default Service;