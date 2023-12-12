import React from 'react'
import Item from './item'

export default ({ products, increment, decrement, orderLines }) => (
    <div className="products" >
        {products.map(product => {
            const orderLine = orderLines.find(x => x.productId === product.id)
            
            return (
                <Item key={product.id} {...product} 
                    quantity={orderLines.length !== 0 && orderLine? orderLine.quantity : 0 }
                    increment={increment}
                    decrement={decrement} />
                )
        })}
    </div>
)