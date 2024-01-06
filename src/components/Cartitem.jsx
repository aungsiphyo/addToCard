import React from 'react'

const Cartitem = ({fruit}) => {
  return (
    <div className='card cart'>
        <div>
            <p className='card_name'>{fruit.name}</p>
            <p className='card_description'>{fruit.description}</p>
        </div>
        <div className='card-right'>
            <p className='card_price'>$ {fruit.price}</p>
            <input type="number" className='card-input' min={1} max={5}/>
        </div>
    </div>
  )
}

export default Cartitem