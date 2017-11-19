import { createAction } from 'redux-actions'
import * as Actions from '../constants/actions'

export const createMentometer = createAction(Actions.CREATE_MENTOMETER)
export const startSession = createAction(Actions.START_SESSION)
export const startVote = createAction(Actions.START_VOTE)
export const vote = createAction<number>(Actions.VOTE)