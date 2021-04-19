import React from 'react';

const ManageData = (props) => {
    const{_id,title,price,description ,imageURL} =  props.pd 
    const deletebtn =(_id) =>{
        const url = `https://fast-hollows-52421.herokuapp.com/delete/${_id}`;
        fetch(url,{ 
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
         console.log(result)
        })
    }
    return (
        <div className="col-md-9">
        <table className="table">
            <tr>
                <th>title</th>
                <th>Price</th>
                <th>description</th>
                <th>delete</th>
            </tr>
            <tr>
                <td>{title}</td>
                <td>{price}</td>
                <td>{description}</td>
               <td><button onClick={() => deletebtn(_id)} type="button" class="btn btn-danger">delete<i class="far fa-trash-alt"></i></button></td> 
             
            </tr>
        </table>

    </div>
    );
};

export default ManageData;