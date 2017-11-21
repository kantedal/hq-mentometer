import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import { logger } from '../middleware'
import rootReducer, { RootState } from '../reducers'
import createSocketIoMiddleware from 'redux-socket.io'
const io = require('socket.io-client')
import { routerMiddleware, push } from 'react-router-redux'

export function configureStore(history: any) {
  // let middleware = applyMiddleware(logger)

  console.log(io)
  const socket = io('http://192.168.2.159:4000')
  let middleware = applyMiddleware(createSocketIoMiddleware(socket, "server/"), routerMiddleware(history))


  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware)
  }

  const store = createStore(rootReducer, {}, middleware) as Store<RootState>

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
