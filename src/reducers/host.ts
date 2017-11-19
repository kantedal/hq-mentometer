import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'

const initialState: HostState = {
  hostStep: 0,
  serverId: null,
  connectedClients: 0,
}

export default handleActions<HostState, any>({
  [Actions.MESSAGE]: (state, action) => {
    console.log('message', action)
    return { ...state }
  },
  ['mentometerServerId']: (state, action) => {
    return { ...state, serverId: action.payload }
  },
  [Actions.CLIENT_CONNECTED]: (state, action) => {
    return { ...state, connectedClients: action.payload }
  },
  [Actions.START_SESSION]: (state, action) => {
    return { ...state, hostStep: 1 }
  },
  [Actions.VOTE_UPDATED]: (state, action) => {
    console.log(action.payload)
    return { ...state, voteStatistics: action.payload }
  }
}, initialState)