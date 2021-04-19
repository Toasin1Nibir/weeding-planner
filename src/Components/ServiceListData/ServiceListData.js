import React from 'react';

const ServiceListData = (props) => {
    const{_id,title,price,description} = props.servicelist
    return (
        <div class="card" style={{width: '18rem'}}>
            <div class="card-body">
                <div className='d-flex'>
                <h5 class="card-title">title is {title}</h5>
                <button type="button" class="btn btn-success">pending</button>
                </div>
              
                <h6 class="card-subtitle mb-2 text-muted">${price}</h6>
                <p class="card-text">{description}</p>
               
            </div>
        </div>
    );
};

export default ServiceListData;