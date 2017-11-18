import { combineReducers, Reducer } from 'redux'
import todos from './todos'
import socket from './socket'
import host from './host'

export interface RootState {
  todos: TodoStoreState
  host: HostState
}

export default combineReducers<RootState>({
  todos, socket, host
})
