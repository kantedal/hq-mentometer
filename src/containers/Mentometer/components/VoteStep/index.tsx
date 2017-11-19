import * as React from 'react'
import Button from 'material-ui/Button'
import * as style from './style.css'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import { VoteBox } from '../../../../components/VoteBox'

export namespace VoteStep {
  export interface Props {
    voteStatistics: IVoteStatistics
    connectedClients: number
    userHasVoted: boolean
    vote: (voteId: number) => void
  }
  export interface State {}
}

export class VoteStep extends React.Component<VoteStep.Props, VoteStep.State> {
  render() {
    const { vote, connectedClients, voteStatistics, userHasVoted } = this.props
    return (
      <div className={style.voteStartScreen}>
        <div className={style.voteInfoText}>
          Click the button to start to enter vote mode for all conencted users
        </div>
  
        <VoteBox vote={vote} voteStatistics={voteStatistics} connectedClients={connectedClients} userHasVoted={userHasVoted} />
      </div>
    )
  }
}
