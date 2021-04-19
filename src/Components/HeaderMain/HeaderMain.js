import React from 'react';
import Weeddingpic from '../Images/1.jpg'
import './HeaderMain.css'
const HeaderMain = () => {
  
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center justify-content-cente">
            <div className="col-md-6 offset-md-1">
                <h1 style={{color: '#E8CD62'}}>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button  className="btn">GET Booking</button>
            </div>
            <div className="col-md-4">
                <img style={{height: '450px'}} src={Weeddingpic} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;