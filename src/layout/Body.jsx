import React from 'react'
import Cards from '../components/Cards'

const fruits = [
    {
        id : 1,
        name : "Banana",
        description : "The best banana form Malaysia",
        price : 0.35
    },
    {
        id : 1,
        name : "Banana",
        description : "The best banana form Malaysia",
        price : 0.35
    },
    {
        id : 1,
        name : "Banana",
        description : "The best banana form Malaysia",
        price : 0.35
    },
    {
        id : 1,
        name : "Banana",
        description : "The best banana form Malaysia",
        price : 0.35
    },
    {
        id : 1,
        name : "Banana",
        description : "The best banana form Malaysia",
        price : 0.35
    },
    {
        id : 6,
        name : "Pineapple",
        description : "The best pineapple form Singapore",
        price : 0.35
    }
]

const Body = () => {
  return (
    <session className="body">
        {
            fruits.map((fruit)=>(
                <Cards key={fruit.id} fruit={fruit}/>
            ))
        }
    </session>
  )
}

export default Body