import { INCREMENT, DECREMENT } from '../actions'
import { order } from './order'

describe('order reducer', () => {
    test('add orderline on increment a product if not exist in order', () => {
        expect(
            order([], {type: INCREMENT, payload: {productId: 1, quantity: 1} })
        ).toContainEqual({productId: 1, quantity: 1})
    })
    test('increment a product in orderline if already exist in order', () => {
        expect(
            order([{productId: 1, quantity: 1}],
            {type: INCREMENT, payload: {productId: 1, quantity: 3} })
        ).toContainEqual({productId: 1, quantity: 4})
    })
    test('decrement a product in orderline if already exist in order', () => {
        expect(
            order([{productId: 1, quantity: 4}],
            {type: DECREMENT, payload: {productId: 1, quantity: 3} })
        ).toContainEqual({productId: 1, quantity: 1})
    })
    test('remove orderline on decrement if quantity is 0', () => {
        expect(
            order([{productId: 1, quantity: 1}],
            {type: DECREMENT, payload: {productId: 1, quantity: 1} })
        ).toHaveLength(0)
    })
  
})