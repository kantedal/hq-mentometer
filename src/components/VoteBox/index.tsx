import * as React from 'react'
import { CSSProperties } from 'react';
import * as style from './style.css'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'

export namespace VoteBox {
  export interface Props {
    voteStatistics: IVoteStatistics
    connectedClients: number
    userHasVoted: boolean
    vote: (voteId: number) => void
  }
}

export const VoteBox: React.SFC<VoteBox.Props> = ({ children, vote, connectedClients, voteStatistics, userHasVoted }) => {
  console.log(connectedClients)
  return (
    <div className={style.voteBox}>
      <div className={style.progressBarRow}>
        <div className={style.progressBarVoteButton}>
          <Button disabled={userHasVoted} onClick={() => vote(0)} style={{ }} fab color='accent' aria-label='add'>
            A
          </Button>
        </div>
        <div className={style.progressBarBox}>
          <LinearProgress className={style.progressBar} color="accent" mode="determinate" value={100 * (voteStatistics.voteA / (1 + connectedClients))} />                                          
        </div>
      </div>
      <br />
      <div className={style.progressBarRow}>
        <div className={style.progressBarVoteButton}>
        <Button disabled={userHasVoted}  onClick={() => vote(1)} style={{ }} fab color='accent' aria-label='add'>
          B
        </Button>
        </div>
        <div className={style.progressBarBox}>
          <LinearProgress className={style.progressBar} color="accent" mode="determinate" value={100 * (voteStatistics.voteB / (1 + connectedClients))} />                                          
        </div>
      </div>
      <br />
      <div className={style.progressBarRow}>
        <div className={style.progressBarVoteButton}>
          <Button disabled={userHasVoted} onClick={() => vote(2)} style={{  }} fab color='accent' aria-label='add'>
            C
          </Button>
        </div>
        <div className={style.progressBarBox}>
          <LinearProgress className={style.progressBar} color="accent" mode="determinate" value={100 * (voteStatistics.voteC / (1 + connectedClients))}/>                                          
        </div>
      </div>
    </div>
  )
}
