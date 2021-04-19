import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Addservice = () => {
const { register, handleSubmit, errors } = useForm();
const [imageURL, setIMageURL] = useState(null);

const onSubmit = data =>{
    const eventData = {
        title: data.title,
        price : data.price,
        description : data.description,
        imageURL: imageURL
      };
      console.log(eventData)
      const url = `https://fast-hollows-52421.herokuapp.com/addservice`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('server side response', res))
  };


  const handleimage = (event) => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'f716ac2cddd9eef5c53f88eeb4b2223f');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
   
    <div className='row'>

      <div class="sidenav col-md-2">
      <Link to="/orderlist">Orderlist</Link>
        <br />
        <Link to="/addservice">Addservice</Link> <br />
        <Link to="/manageorder">manageorder</Link> <br />

      </div>
      
      <div className="col-md-9">
      <h1>Add service</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="Service Title">Service Title</label>
          <br />
          <input name="Title" placeholder="Enter Title"  {...register('title')} />
          <br />
          <label htmlFor="Price">Price</label>
          <br />
          <input name="Price" placeholder="price"  {...register('price')} />
          <br />
          <label htmlFor="Enter description">Enter description</label>
          <br />
          <input name="Description" placeholder="Enter description" {...register('description')} />
          <br />
          <label htmlFor="Image">Image</label>
          <br />
          <input name="example" type='file' onChange={handleimage} />

          {errors?.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>

      </div>

    </div>
       
    );
    
};

export default Addservice;