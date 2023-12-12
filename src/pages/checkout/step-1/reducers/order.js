import { INCREMENT, DECREMENT } from '../actions'

export const order = (state = [], action) => {
     switch(action.type) {
        case INCREMENT: {
            const { quantity, productId } = action.payload
            const orderLine = state.find(x => x.productId === productId)
            
            return orderLine?
                state.map(x => {
                    if(x.productId !== productId) {
                        return x;
                    }
                    
                    return {
                        ...x,
                        quantity: x.quantity + quantity
                    }
                }):
                [...state, {quantity, productId}]
                
        }
        case DECREMENT: {
            const { quantity, productId } = action.payload
            
            return state.map(x => 
                x.productId !== productId?
                    x: ({...x, quantity: x.quantity - quantity })
                ).filter(x => x.quantity !== 0)
        }
        default:
            return state
    }
}