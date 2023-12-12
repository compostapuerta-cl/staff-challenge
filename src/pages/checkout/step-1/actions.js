import axios from 'axios'

export const ADD_CLIENT = 'ADD_CLIENT'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const addClient = (name, dni) => ({
  type: ADD_CLIENT,
  client: {  
    name,
    dni
  }
})

export const fetchProducts = uri => ({
  type: FETCH_PRODUCTS,
  payload: axios(uri)
})

export const increment = (productId, quantity) => ({
  type: INCREMENT,
  payload: {
    productId,
    quantity
  }
})


export const decrement = (productId, quantity) => ({
  type: DECREMENT,
  payload: {
    productId,
    quantity
  }
})

