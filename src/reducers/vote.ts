import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'

const initialState: VoteState = {
  userHasVoted: false,
  voteStatistics: {
    voteA: 0,
    voteB: 0,
    voteC: 0,
    userVotes: []
  }
}

export default handleActions<VoteState, any>({
  [Actions.VOTE_UPDATED]: (state, action) => {
    console.log(action.payload)
    return { ...state, voteStatistics: action.payload }
  },
  [Actions.START_VOTE]: (state, action) => {
    return { 
      ...state,
      userHasVoted: false,
      voteStatistics: {
        voteA: 0,
        voteB: 0,
        voteC: 0,
        userVotes: []
      }
    }
  },
  [Actions.VOTE]: (state, action) => {
    return { ...state, userHasVoted: true}
  },
  [Actions.VOTE_STARTED]: (state, action) => {
    return { 
      ...state,
      userHasVoted: false,
      voteStatistics: {
        voteA: 0,
        voteB: 0,
        voteC: 0,
        userVotes: []
      }
    }
  } 
}, initialState)