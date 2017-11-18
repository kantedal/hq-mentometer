import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'

const initialState: HostState = {
  hostStep: 0,
  serverId: null,
  connectedClients: []
}

export default handleActions<any, any>({
  [Actions.MESSAGE]: (state, action) => {
    console.log('message', action)
    return {}
  },
  ['mentometerServerId']: (state, action) => {
    console.log('host mentometer server id', action.payload)
    return {
      serverId: action.payload,
      ...state
    }
  }
}, initialState);