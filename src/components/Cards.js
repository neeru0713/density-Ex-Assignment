import React from 'react'
import Card from './Card'
const Cards = ({data}) => {
  return (
    <div className="flex w-100 justify-evenly mt-20">
        {data.map((card) => (
            <Card
            bgcolor={card.bgcolor}
            heading={card.heading}
            desc={card.desc}
            />
        ))}
        
    </div>
  )
}

export default Cards