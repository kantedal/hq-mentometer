import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'

const initialState: HostState = {
  hostStep: 0,
  serverId: null,
  connectedClients: []
}

export default handleActions<HostState, any>({
  [Actions.MESSAGE]: (state, action) => {
    console.log('message', action)
    return { ...state }
  },
  ['mentometerServerId']: (state, action) => {
    return { ...state, serverId: action.payload }
  }
}, initialState);