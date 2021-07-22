import React from 'react'

const ProductItem = ({ name, properties }) => {
  
  return (
    <div style={{ border: '1px solid black', padding: '0 15px', marginBottom: '10px' }}>
      <p>{name}</p>
      <ul>
        {properties.map((property) => {
          return <li>{property}</li>
        })}
      </ul>
    </div>
  )
}

export default ProductItem