import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
    const reviewData = {
        name: data.name,
        designation : data.designation,
        description : data.description
      };
      console.log(reviewData)
      const url = `https://fast-hollows-52421.herokuapp.com/addreview`;
      
      fetch(url, {
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(reviewData)
      })
      .then(res => console.log('server side response', res))
    };

    return (

<div className='row'>
        
        <div class="sidenav col-md-2">
                <Link to="#">Book</Link><br />
                <Link to="/serviceList">Booklist</Link> <br />
                <Link to="/review">Review</Link> <br />

            </div>
            <div className='col-md-9'>
              <h1>Give a Review</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input name='name' placeholder='Your name' {...register('name')}/>
                    <br/><br></br>
                    <input name='designation' placeholder='Designation' {...register('designation')} />
                    <br/><br/>
                    <input name='description' placeholder='Description'  {...register('description')} />

                    {errors.exampleRequired && <span>This field is required</span>}
                    <br/><br/>
                    <input type="submit" />
                </form>
            </div>

       
        </div>
    );
};

export default Review;