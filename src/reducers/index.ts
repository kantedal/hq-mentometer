import { combineReducers, Reducer } from 'redux'
import todos from './todos'
import socket from './socket'
import host from './host'
import mentometer from './mentometer'
import vote from './vote'

export interface RootState {
  todos: TodoStoreState
  host: HostState
  mentometer: MentometerState
  vote: VoteState
}

export default combineReducers<RootState>({
  todos, socket, host, mentometer, vote
})
