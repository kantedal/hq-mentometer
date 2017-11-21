import * as React from 'react'
import * as HostActions from '../../actions/host'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, Switch, Route } from 'react-router'
import { RootState } from '../../reducers'
import { Header, MainSection } from '../../components'
import { ConnectionStep } from './components/ConnectionStep'
import { VoteScreen } from './components/VoteScreen'

export namespace Host {
  export interface Props extends RouteComponentProps<void> {
    actions: typeof HostActions
    serverId: string
    connectedClients: number
    hostStep: number
    voteStatistics: IVoteStatistics
    userHasVoted: boolean
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class Host extends React.Component<Host.Props, Host.State> {

  componentDidMount() {
    const { actions: { createMentometer } } = this.props
    createMentometer()
  }

  componentWillLeave() {
    console.log('component will leace')
  }

  componentWillEnter() {
    console.log('component will enter')
  }

  render() {
    const { hostStep, children, serverId, connectedClients, voteStatistics, userHasVoted, actions: { startSession, startVote, vote, finishSession, backToMenu } } = this.props
    return (
      <div>
        {hostStep === 0 && <ConnectionStep serverId={serverId} connectedClients={connectedClients} startSession={startSession}/>}
        {hostStep === 1 && (
          <VoteScreen
            startVote={startVote} 
            vote={vote} 
            voteStatistics={voteStatistics} 
            connectedClients={connectedClients} 
            userHasVoted={userHasVoted} 
            serverId={serverId}
            finishSession={finishSession}
            backToMenu={backToMenu}
          />
          )}
      </div>
    )
  }
}

function mapStateToProps(state: RootState) {
  return {
    serverId: state.host.serverId,
    connectedClients: state.host.connectedClients,
    hostStep: state.host.hostStep,
    voteStatistics: state.vote.voteStatistics,
    userHasVoted: state.vote.userHasVoted
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HostActions as any, dispatch)
  }
}
