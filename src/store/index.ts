import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import { logger } from '../middleware'
import rootReducer, { RootState } from '../reducers'
import createSocketIoMiddleware from 'redux-socket.io'
const io = require('socket.io-client')

export function configureStore(initialState?: RootState) {
  // let middleware = applyMiddleware(logger)

  console.log(io)
  const socket = io('http://localhost:4000')
  let middleware = applyMiddleware(createSocketIoMiddleware(socket, "server/"))

  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware)
  }

  const store = createStore(rootReducer, initialState, middleware) as Store<RootState>

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
