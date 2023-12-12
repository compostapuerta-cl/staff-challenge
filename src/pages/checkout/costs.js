import React from 'react'
import { soles } from './money'
import { connect } from 'react-redux'

const Costs = ({children, subTotal, igv, total}) => 
    <div className="row">
        <div className="col-3">
            <p>Subtotal</p>
            <p>IGV</p>
            <p>Total</p>
        </div>
        <div className="col-3">
            <p>{soles(subTotal)}</p>
            <p>{soles(igv)}</p>
            <p>{soles(total)}</p>
        </div>
        <div className="offset-3 col-3">
            {children}
        </div>
    </div>
    

const cost = (orderLines, products) => {
    const product = productId => products.find(x => x.id === productId)
    
    const subTotal = orderLines.length === 0? 
        0: sum(orderLines.map(x => x.quantity * 
            product(x.productId).price))
        
    const igv = subTotal * 0.18
    const total = subTotal + igv
    
    return {
        subTotal,
        igv,
        total
    }
}


const sum = array => array.reduce((a, b) => a + b, 0)

const mapStateToProps = state => ({
    ...cost(state.order, state.products.products)
})
  
export default connect(mapStateToProps)(Costs)