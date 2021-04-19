import React from 'react';
// import Card from 'react-bootstrap/Card'
const ReviewData = (props) => {
    const {name,designation, description}= props.reviewdata
    return (

<div className="col-md-4 text-center">
           
            <h5 className="mt-3 mb-3">{name}</h5>
            <p className="text-secondary">{description}</p>
            <p className="text-secondary">{designation}</p>
        </div>

         
 
      
    );
};

export default ReviewData;