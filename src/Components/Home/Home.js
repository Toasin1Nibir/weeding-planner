import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import OurProject from '../OurProject/OurProject';



import Reviewset from '../Reviewset/Reviewset';
import Service from '../Service/Service';




const Home = () => {
  
    return (
        <div>
            <Header></Header>
            <HeaderMain></HeaderMain>
            <Service></Service>
           <OurProject></OurProject>
            <Reviewset></Reviewset>
            <Footer></Footer>


        </div>
     
    );
};

export default Home;