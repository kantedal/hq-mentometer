import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const changeServerId = createAction<string>(Actions.CHANGE_SERVER_ID)
export const connectToMentometer = createAction<string>(Actions.CONNECT_TO_MENTOMETER)
export const closeSessionEndedDialog = createAction(Actions.CLOSE_SESSION_ENDED_DIALOG)
export const vote = createAction<number>(Actions.VOTE)