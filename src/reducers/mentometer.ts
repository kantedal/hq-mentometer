import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'

const initialState: MentometerState = {
  mentometerStep: 0,
  serverId: '',
  failMessage: '',
  sessionEnded: false,
  activeVote: false,
  connectedClients: 0
}

export default handleActions<MentometerState, any>({
  [Actions.CHANGE_SERVER_ID]: (state, action) => {
    return { ...state, serverId: action.payload }
  },
  [Actions.CONNECT_TO_MENTOMETER]: (state, action) => {
    return { ...state }
  },
  [Actions.MENTOMETER_CONNECTION_SUCCESS]: (state, action) => {
    return { ...state, mentometerStep: 1, failMessage: null }
  },
  [Actions.MENTOMETER_CONNECTION_FAILED]: (state, action) => {
    return { ...state, mentometerStep: 0, failMessage: 'Connection failed' }
  },
  [Actions.CLIENT_CONNECTED]: (state, action) => {
    return { ...state, connectedClients: action.payload }
  },
  [Actions.MENTOMETER_SESSION_ENDED]: (state, action) => {
    return { ...state, mentometerStep: 0, sessionEnded: true }
  },
  [Actions.CLOSE_SESSION_ENDED_DIALOG]: (state, action) => {
    return { ...state, mentometerStep: 0, sessionEnded: false }
  },
  [Actions.VOTE_STARTED]: (state, action) => {
    return { ...state, activeVote: true, mentometerStep: 2 }
  },
  [Actions.CLIENT_CONNECTED]: (state, action) => {
    return { ...state, connectedClients: action.payload }
  },
}, initialState);