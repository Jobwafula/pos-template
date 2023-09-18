import React from "react";
import './Products.css'
const data = [{ id: 1, name: "panga", price: 10, quantity: 2 },
{ id: 1, name: "panga", price: 10, quantity: 2 },
{ id: 1, name: "panga", price: 10, quantity: 2 },
{ id: 1, name: "panga", price: 10, quantity: 2 },];

export default function Products() {
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>
         {data.map((val, key) => {
          return (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.price}</td>
              <td>{val.quantity}</td>
            </tr>
          );
        })} 
      </table>
    </div>
  );
}
