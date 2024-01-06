import React from 'react'

const Cards = ({fruit}) => {
  return (
    <div className='card'>
        <div>
            <p className='card_name'>{fruit.name}</p>
            <p className='card_description'>{fruit.description}</p>
            <p className='card_price'>$ {fruit.price}</p>
        </div>
        <div className='card-right'>
            <input type="number" className='card-input' min={1} max={5}/>
            <button>+ ADD</button>
        </div>
    </div>
  )
}

export default Cards