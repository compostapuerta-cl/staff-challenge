import { reducer } from './reducers'
import { INCREMENT } from './actions'

describe('order line reducer', () => {
    test('initial state', () => {
        expect(reducer(undefined, {})).toEqual({ orderLines: []})
    })
    const product = {id: 1, name: 'Some super product'}
    test("increment add orderLine for a product if it doesn't exist", () => {
        expect(reducer(undefined, {type: INCREMENT, product}).orderLines)
            .toContainEqual({product, quantity: 1})
    })
    test("increment quantity of orderLine if product exist", () => {
        expect(
            reducer({ orderLines: [ { product, quantity: 1 }] },
                 {type: INCREMENT, product}).orderLines)
            .toContainEqual({product, quantity: 2})
    })
})