import React from 'react'
import Cartitem from './Cartitem'
const fruits = [
    {
        id : 1,
        name : "Banana",
        description : "Best banana form Thailand",
        price : 0.35,
        qty : 2
    },
    {
        id : 3,
        name : "Orange",
        description : "Best orange form Thailand",
        price : 0.35,
        qty : 2
    },
    {
        id : 2,
        name : "Pineapple",
        description : "Best pineapple form Thailand",
        price : 0.35,
        qty : 2
    }
]

const Cart = () => {
  return (
    <div className='card-box'>
        <h2>Cart</h2>
        {
            fruits.map((fruit)=>(
                <Cartitem key={fruit.id} fruit={fruit}/>
            ))
        }
        <hr />
        <div className='total'>
            <h3>Total Price</h3>
            <p>$ 3000.00</p>
        </div>
        <div className="btns">
            <button className='close-btn'>Close</button>
            <button className='order-btn'>Order</button>
        </div>
    </div>
  )
}

export default Cart