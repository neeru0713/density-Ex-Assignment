import React from 'react'

const Card = ({bgcolor, desc, heading}) => {
  return (
    <div className="card h-[10%] w-[17%] p-2 mb-10 rounded-lg" style={{ backgroundColor: `${bgcolor}` }}>
        <div className="smile"></div>
        <h3 className="font-bold pb-4 text-center">{heading}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default Card