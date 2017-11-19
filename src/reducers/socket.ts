import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'

const initialState: any = {
  hostStep: 0
}

export default handleActions<any, any>({
  [Actions.MESSAGE]: (state, action) => {
    console.log('message', action)
    return {}
  },
  ['mentometerServerId']: (state, action) => {
    console.log('mentometer server id', action)
    return {}
  },
}, initialState);