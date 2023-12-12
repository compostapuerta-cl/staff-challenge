import { INCREMENT, DECREMENT } from './actions'
const defaultState = { orderLines: [] }
export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT:
            const { product } = action
            const { orderLines } = state
            const orderLine = orderLines.find(x => x.product.id === product.id)
            
            const newOrderLine = 
                orderLine ? 
                 {...orderLine, quantity: orderLine.quantity + 1}: 
                 { product, quantity: 1}
            
            return {
                ...state, 
                orderLines: [
                    ...orderLines.filter(x => x !== orderLine),
                    newOrderLine
                ] 
            }
        case DECREMENT: 
            return state
        default:
            return state
    }
}
