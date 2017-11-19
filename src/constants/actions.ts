export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const COMPLETE_ALL = 'COMPLETE_ALL'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

// Socket
export const MESSAGE = 'message'

// Host
export const CLIENT_CONNECTED = 'clientConnected'
export const START_SESSION = 'START_SESSION'
export const START_VOTE = 'server/startVote'
export const CREATE_MENTOMETER = 'server/createMentometer'

// Mentometer
export const CHANGE_SERVER_ID = 'CHANGE_SERVER_ID'
export const CONNECT_TO_MENTOMETER = 'server/connectToMentometer'
export const MENTOMETER_CONNECTION_SUCCESS = 'mentometerConnectionSuccess'
export const MENTOMETER_CONNECTION_FAILED = 'mentometerConnectionFailed'
export const MENTOMETER_SESSION_ENDED = 'sessionEnded'
export const CLOSE_SESSION_ENDED_DIALOG = 'CLOSE_SESSION_ENDED_DIALOG'
export const VOTE_STARTED = 'voteStarted'
export const VOTE_UPDATED = 'voteUpdate'
export const VOTE = 'server/vote'