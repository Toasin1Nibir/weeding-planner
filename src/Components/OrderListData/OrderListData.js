import React from 'react';

const OrderListData = (props) => {
const{email,title,_id,price,displayName}= props.order
    return (
        <div>
              <table className="table">
                    <tr>
                    <th>price</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Title</th>
                       
                    </tr>
                    <tr>
                        <td>{price}</td>
                        <td>{displayName}</td>
                        <td>{email}</td>
                        <td>{title}</td>
                    </tr>
                </table>
        </div>
    );
};

export default OrderListData;