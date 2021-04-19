import React from 'react';
import { useHistory } from 'react-router';
import Card from 'react-bootstrap/Card'
import './ServiceData.css'
const ServiceData = (props) => {
   const{_id,imageURL , title,description,price} = props.servicedata
   const history = useHistory();
   const handleClick = (_id) => {
       const url = `/book/${_id}`
       history.push(url)
   }
    return ( 
        <Card className='col-md-4 container text-center' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageURL} style={{height: '250px'}} />
            <Card.Body className='c'>
                <Card.Title>
                    <h3>{title}</h3>
                </Card.Title>
                <Card.Text>
                    <h5>${price}</h5>
                    <p className="text-secondary">{description}</p>
                </Card.Text>
                <button type="button" class="btn btn-success" onClick={() => handleClick(_id)}>Book</button>
            </Card.Body>
        </Card>
      
    );
};

export default ServiceData;