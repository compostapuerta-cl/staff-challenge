import { client } from './client'
import { products } from './products'
import { order } from './order'
import { combineReducers } from 'redux'

const combinedReducer = combineReducers({
    client,
    products,
    order
})

export default combinedReducer