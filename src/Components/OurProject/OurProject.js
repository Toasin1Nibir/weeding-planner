import React from 'react';
import Weeddingpic from '../Images/2.jpg'
import OurProjectData from '../OurProjectData/OurProjectData';
const OurProject = () => {
    const serviceData = [
        {
            name: 'Normal',
            img: Weeddingpic
        },
        {
            name: 'Standard',
            img: Weeddingpic
        },
        {
            name: 'Premiuem',
            img: Weeddingpic
        }
    ]
    return (
        <section className="services-container mt-5">
        <div className="text-center">
            <h3 style={{color: '#E8CD62'}}>OUR Projects</h3>
            
        </div>
        <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
            {
                serviceData.map(service => <OurProjectData service={service}></OurProjectData>)
            }
        </div>
    </div>
    </section>
    );
};

export default OurProject;