import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'

const initialState: HostState = {
  hostStep: 0,
  serverId: null,
  connectedClients: 0,
  // infoDialogWindowOpen: false,
  // infoDialogMessage: '',
}

export default handleActions<HostState, any>({
  [Actions.FINISH_SESSION]: (state, action) => {
    return { ...state }
  }
}, initialState)