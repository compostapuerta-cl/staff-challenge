import React from 'react';
import { Button } from 'reactstrap'
import './index.css'

export default ({ id, image, name, stock, quantity, increment, decrement }) => {
  const removeProduct = () => {
    decrement(id, quantity)
  }

  return (
    <div className="product card">
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <div className="quantity">
          <Button {...{ disabled: quantity <= 0 }} 
            onClick={() => decrement(id, 1)} >-</Button>
          <input disabled type="text" value={quantity} />
          <Button {...{ disabled: quantity >= stock }} 
            onClick={() => increment(id, 1)}>+</Button>
        </div>
        {
          quantity === 0?
          <Button block color="primary" onClick={() => increment(id, 1)}>ADD</Button>:
          <Button block color="primary" onClick={removeProduct}>REMOVE</Button>
        }
      </div>
    </div>
  )
}