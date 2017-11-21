import { createAction } from 'redux-actions'
import * as Actions from '../constants/actions'
import {push, replace} from 'react-router-redux'

export const createMentometer = createAction(Actions.CREATE_MENTOMETER)
export const startSession = createAction(Actions.START_SESSION)
export const startVote = createAction(Actions.START_VOTE)
export const vote = createAction<number>(Actions.VOTE)
export const finishSession = createAction(Actions.FINISH_SESSION)
export const backToMenu = () => replace('/')