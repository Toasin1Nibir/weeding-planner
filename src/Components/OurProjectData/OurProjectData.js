import React from 'react';

const OurProjectData = ({service}) => {
    return (
        <div className="col-md-4 text-center">
        <img style={{height: '350px'}} src={service.img} alt="" />
        <h5 className="mt-3 mb-3">{service.name}</h5>
        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
    </div>
    );
};

export default OurProjectData;