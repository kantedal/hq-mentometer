import * as React from 'react'
import Button from 'material-ui/Button'
import * as style from './style.css'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import { VoteBox } from '../../../../components/VoteBox'

export namespace VoteScreen {
  export interface Props {
    voteStatistics: IVoteStatistics
    connectedClients: number
    userHasVoted: boolean
    startVote: () => void
    vote: (voteId: number) => void
  }
  export interface State {}
}

export class VoteScreen extends React.Component<VoteScreen.Props, VoteScreen.State> {
  render() {
    const { vote, connectedClients, voteStatistics, userHasVoted } = this.props
    return (
      <div className={style.voteStartScreen}>
        <div className={style.voteInfoText}>
          Click the button to start to enter vote mode for all conencted users
        </div>
  
        <VoteBox vote={vote} voteStatistics={voteStatistics} connectedClients={connectedClients} userHasVoted={userHasVoted} />
  
        <Button className={style.finishVoteButton}>
          Finish vote
        </Button>
  
      </div>
    )
  }

  componentDidMount() {
    console.log('component did mount')
    this.props.startVote()
  }
}
