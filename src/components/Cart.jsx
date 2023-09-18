import React from 'react'
import './Cart.css'

export default function Cart() {
  return (
    <div className='cart'>
        <table>
            {/* <thead>order</thead> */}
            <tbody>'
                <tr>
                    <td>Product</td>
                    <td>$0.00</td>
                </tr>
                <tr>
                    <td>Total pay</td>
                    <td>$0.00</td>
                </tr>
            </tbody>
            
        </table>
      <button className='cart-button'>pay</button>
    </div>
  )
}
