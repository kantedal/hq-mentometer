import * as React from 'react'
import * as MentometerActions from '../../actions/mentometer'
import * as style from './style.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, Switch, Route } from 'react-router'
import { RootState } from '../../reducers'
import { Header, MainSection } from '../../components'
import { CSSProperties } from 'react'
import Button from 'material-ui/Button'
import { ConnectionStep } from './components/ConnectionStep'
import { VoteStep } from './components/VoteStep/index';
import { WaitingStep } from './components/WaitingStep/index';

export namespace Mentometer {
  export interface Props extends RouteComponentProps<void> {
    actions: typeof MentometerActions
    serverId: string
    failMessage: string
    mentometerStep: number
    sessionEnded: boolean
    connectedClients: number
    userHasVoted: boolean
    voteStatistics: IVoteStatistics
  }
  export interface State {}
}

@connect(mapStateToProps, mapDispatchToProps)
export class Mentometer extends React.Component<Mentometer.Props, Mentometer.State> {

  render() {
    const { 
      children, serverId, failMessage, mentometerStep, connectedClients, userHasVoted, voteStatistics,
      sessionEnded, actions: { changeServerId, connectToMentometer, closeSessionEndedDialog, vote } 
    } = this.props
    console.log(this.props)
    return (
      <div>
        {mentometerStep === 0 && (
          <ConnectionStep
            serverId={serverId} 
            changeServerId={changeServerId} 
            connectToMentometer={connectToMentometer}
            failMessage={failMessage}
            sessionEnded={sessionEnded}
            closeSessionEndedDialog={closeSessionEndedDialog}
          />
        )}
        {mentometerStep === 1 && <WaitingStep connectedClients={connectedClients} />}
        {mentometerStep === 2 && <VoteStep voteStatistics={voteStatistics} userHasVoted={userHasVoted} connectedClients={connectedClients} vote={vote} />}
      </div>
    )
  }
}


function mapStateToProps(state: RootState) {
  return {
    serverId: state.mentometer.serverId,
    failMessage: state.mentometer.failMessage,
    mentometerStep: state.mentometer.mentometerStep,
    sessionEnded: state.mentometer.sessionEnded,
    voteStatistics: state.vote.voteStatistics,
    userHasVoted: state.vote.userHasVoted,
    connectedClients: state.mentometer.connectedClients
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MentometerActions as any, dispatch)
  }
}
