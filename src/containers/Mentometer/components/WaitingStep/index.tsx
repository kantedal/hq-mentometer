import * as React from 'react'
import Button from 'material-ui/Button'
import * as style from './style.css'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import { VoteBox } from '../../../../components/VoteBox'
import { CircularProgress } from 'material-ui';

export namespace VoteStep {
  export interface Props {
    connectedClients: number
  }
  export interface State {}
}

export class WaitingStep extends React.Component<VoteStep.Props, VoteStep.State> {
  render() {
    const { connectedClients } = this.props
    return (
      <div className={style.watingStepBox}>
        <div className={style.waitingInfoText}>
          Waiting for host to start vote. Currently connected users: {connectedClients}
          <CircularProgress className={style.progress} size={60} color='accent' />
        </div>
      </div>
    )
  }
}
