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
    serverId: string
    startVote: () => void
    vote: (voteId: number) => void
    finishSession: () => void
    backToMenu: () => void
  }
  export interface State {}
}

export class VoteScreen extends React.Component<VoteScreen.Props, VoteScreen.State> {
  render() {
    const { vote, connectedClients, voteStatistics, userHasVoted, startVote, serverId, finishSession, backToMenu } = this.props
    const totalVotes = voteStatistics.voteA + voteStatistics.voteB + voteStatistics.voteC

    const finishSessionAndLogout = () => {
      finishSession()
      backToMenu()
    }
    return (
      <div className={style.voteStartScreen}>
        <div className={style.voteInfoText}>
          Click on the answer you find most likely. <br/>
          <div style={{ display: 'flex', direction: 'row', marginTop: '15px' }}>
            <div style={{ flexGrow: 1 }}>
              Connected: <b>{connectedClients}</b>
            </div>
            <div style={{ flexGrow: 1 }}>
              Server: <b>{serverId}</b>
            </div>
          </div>
        </div>

        <div className={style.voteBox}> 
          <VoteBox vote={vote} voteStatistics={voteStatistics} connectedClients={connectedClients} userHasVoted={userHasVoted} />
        </div>

        <div className={style.voteStatistics}>
          {totalVotes} / {connectedClients + 1} users has voted.
        </div>

        <div className={style.buttonBox}>
          <div style={{ flexGrow: 1 }}>
            <Button onClick={() => startVote()} className={style.finishVoteButton}>
              <i style={{marginRight: '5px'}} className='material-icons'>add</i>  
              New vote
            </Button>
          </div>
          <div onClick={finishSessionAndLogout} style={{ flexGrow: 1 }}>
            <Button className={style.finishVoteButton}>
              <i style={{marginRight: '5px'}} className='material-icons'>clear</i>  
              Finish session
            </Button>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.startVote()
  }
}
