import React from 'react'
import './index.css'

import Client from '../client'
import Costs from '../costs'
import { soles } from '../money'

import { connect } from 'react-redux'

let Step2 = ({ client, orderLines }) => 
    <div>
        <h1>paso 2</h1>
        <section className="client row">
            <div className="col">
                <h3>Resumen</h3>
                {orderLines.map(line => 
                    <div className="product row" key={line.product.id}>
                        <div className="col-9 media">
                            <img className="mr-3" src={line.product.image} alt={line.product.name}/>
                            <div className="media-body pt-2">
                                <h5>{line.product.name}</h5>
                                Cras sit amet nibh libero, in gravida nulla.
                                Nulla vel metus scelerisque ante sollicitudin.
                                Cras purus odio, vestibulum in vulputate at.
                            </div>
                        </div>
                        <div className="col-3">
                            <p>Cant: {line.quantity}</p>
                            <p>Sub Total: {soles(subTotal(line))}</p>
                        </div>
                    </div>)}
            </div>
        </section>
        <section className="client row">
            <div className="col">
                <h3>Datos del cliente</h3>
                <Client gray
                    name={<p>{client.name}</p>}
                    dni={<p>{client.dni}</p>}
                />
            </div>
        </section>
        <section>
            <Costs />
        </section>
    </div>


const subTotal = line => line.quantity * line.product.price

const getOrderLines = (orderL, products) => 
    orderL.map(x => 
        ({
            quantity: x.quantity,
            product: products.find(p => p.id === x.productId)
        }))


const mapStateToProps = state => {
    return {
      client: state.client,
      orderLines: getOrderLines(state.order, state.products.products)
    }
  }

export default connect(mapStateToProps)(Step2)