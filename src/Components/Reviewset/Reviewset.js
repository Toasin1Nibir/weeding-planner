import React from 'react';
import { useEffect, useState } from 'react';
import ReviewData from '../ReviewData/ReviewData';
const Reviewset = () => {
    const [review, addreview] = useState([])
    useEffect(()=>{
        fetch('https://fast-hollows-52421.herokuapp.com/review')
        .then(res => res.json())
        .then(data => addreview(data))
    })
    return (
   
            <section className="services-container mt-5">
            <div className="text-center">
                <h3 style={{color: '#E8CD62'}}>Testimonial</h3>
                <h1>Reviews from our client</h1>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                     review.map(reviewdata => <ReviewData reviewdata={reviewdata}></ReviewData>)
                }
            </div>
        </div>
        </section>

       
            
    
    );
};

export default Reviewset;