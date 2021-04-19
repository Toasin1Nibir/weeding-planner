import React, { useContext, useEffect, useState } from 'react';
import {
    Link, useParams
  } from "react-router-dom";
  import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import './Book.css'
const Book = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
const [book , setBook] = useState([])
    useEffect(()=>{
        fetch('https://fast-hollows-52421.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setBook(data))
    } ,[])
    const{id} = useParams()
    console.log('before find',id)
     const match = book.find(pd => pd._id == id)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
      
         const totaldata = {...loggedInUser, ...match}
        const url = `https://fast-hollows-52421.herokuapp.com/addbook`;
      
      fetch(url, {
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(totaldata)
      })
      .then(res => console.log('server side response', res))
        }
    return (
        <div className='row'>
        
                <div class="sidenav col-md-2">
                    <Link to ="/book">book</Link>
                    <br/>
                    <Link to="/serviceList">booklist</Link> <br/>
                    <Link to="/review">review</Link> <br/>
                   
                </div>
           
            <div className="col-md-9">
            <h1>Your booking information</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <br/>
                    <input name='name' value={loggedInUser.displayName} {...register('name')}/>
                    <br/><br/>
                    <input name='email' value={loggedInUser.email} {...register('email')} />
                    <br/><br/>
                    <input name='Title' value={match?.title} {...register('title')}/>

                    {errors.exampleRequired && <span>This field is required</span>}
                    <br/><br/>
                    <h4>Your service charge will be ${match?.price}</h4>
                    <input type="submit" />
                </form>
        
            </div>
          
        </div>
    );
};

export default Book;