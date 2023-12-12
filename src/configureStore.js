import { createStore, applyMiddleware } from 'redux'

import combinedReducer from './pages/checkout/step-1/reducers'
import promiseMiddleware  from 'redux-promise-middleware'
import logger from 'redux-logger'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, combinedReducer)

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(promiseMiddleware(), logger))
  let persistor = persistStore(store)
  return { store, persistor }
}